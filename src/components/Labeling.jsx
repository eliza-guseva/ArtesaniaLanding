import { useState, useEffect } from 'react';
import labelService from '../services/labelsServices';


const Labeling = () => {

    const [loading, setLoading] = useState(true);
    const [label, setLabel] = useState(null)
    const [openiaArray, setOpeniaArray] = useState(null);
    const [workerArray, setWorkerArray] = useState(null);
    const [error, setError] = useState(null);
    

    const callRandomLabel = async () => {
        try {
            const randomLabel = await labelService.getRandomLabel();
            setLabel(randomLabel[0]);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        callRandomLabel();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(label) {
            setOpeniaArray(label.openai_labels);
            setWorkerArray(label.openai_labels);            
        }   
    }, [label])

    useEffect(() => {
        if (openiaArray) {
           setLoading(false);
        }
    }, [openiaArray]);

    const handleInput = (e) => {
        setWorkerArray(prev => {
            const newArr = [...prev];
            newArr[e.target.id] = e.target.value;
            return newArr;
        })
    }

    const handleDeleteLabel = (e, i) => {
        e.preventDefault();
        if (openiaArray[i] === null) {
            setWorkerArray(prev => {
                return prev.filter((elem, index) => i !== index);
            });
            setOpeniaArray(prev => {
                return prev.filter((elem, index) => i !== index);
            });
        } else {
            setWorkerArray(prev => {
                const newArr = [...prev];
                newArr[i] = null;
                return newArr;
            })            
        }

    }

    const handleAddLabel = (e) => {
        e.preventDefault();
        setWorkerArray(prev => [...prev, ""]);
        setOpeniaArray(prev => [...prev, null]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            openai_labels: [...openiaArray],
            labels_0: [...workerArray],
            worker0: "test",
            __v: 1
        };
        try {
            setLoading(true);
            await labelService.updateLabel(label._id, body);
            callRandomLabel();
        } catch (error) {
            setError(error);
        };
    };


    return (
        <>
            {error && console.log(error)}
            {loading && <p>Loading...</p>}
            {!loading && <div id='labeling'>
                <div>
                    <h3>Question:</h3>
                    <p>{label.question}</p>
                    <h3>Review:</h3>
                    <p>{label.review}</p>                    
                </div>
                <form>
                    <h3>Labels</h3>
                    {workerArray.map((label, i) => {
                        if (label !== null) {
                            return (
                                <div key={i}>
                                    <input type="text" value={label} id={i} onChange={handleInput}/>
                                    <button onClick={(e) => handleDeleteLabel(e, i)}>X</button>
                                </div>
                            )                            
                        }
                        return null
                    })}
                    <button onClick={handleAddLabel}>+</button>
                    <button onClick={handleSubmit} className="submit">Submit</button>            
                </form>
            </div>}            
        </>

    )
}

export default Labeling