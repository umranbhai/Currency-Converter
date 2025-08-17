import { useState } from "react";
export default function CharacterCounter() {
    const [text, setText] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [lineCount, setLineCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);

    const handleChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
        const Character = inputText.replace(/\s+/g, "");
        setCharacterCount(Character.length);
        const words = inputText.split(/ /);
        setWordCount(words.length);
        const lines = inputText.split(/\n/);
        setLineCount(lines.length);
        const sentences = inputText.split(/[.!?](\s|$)/).filter(sentence => sentence.trim().length > 0);
        setSentenceCount(sentences.length);


    }



    return <section className='paddingHorizontal paddingVertical flex items-start justify-center bg-black text-white h-[90vh]'>
        {/* <h1 className='text-bold text-2xl text-center'>BMI Calculator</h1> */}

        <div className='mt-10 paddingVertical flex items-center justify-center w-[500px]'>
            <div className='flex flex-col border border-black p-5 w-full bg-white text-black rounded-lg'>
                <div className='text-bold text-2xl text-center'>Character Counter</div>
                <div className="flex flex-col pt-5 flex items-center justify-center gap-2">
                    <div className="w-full">
                        <label htmlFor="" className='text-bold'>Character</label>
                        <textarea value={text} onChange={handleChange} rows={6} name="" id="" className="w-full border border-black rounded-lg p-2" placeholder="Enter Character" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                        <div>Character Count : {characterCount} </div>
                        <div>Word Count : {wordCount} </div>
                        <div>Line Count : {lineCount} </div>
                        <div>sentence Count : {sentenceCount} </div>
                    </div>
                    <div className="w-full">
                        <button className="bg-black text-white py-2 px-5 rounded-lg w-full text-bold cursor-pointer" onClick={(e) => {

                        }}>Reset</button>
                    </div>
                </div>
            </div>
        </div>

    </section>

}