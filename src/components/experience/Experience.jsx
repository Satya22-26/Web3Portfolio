import { SlCalender } from "react-icons/sl"
import './Experience.css'
import cchef from "../../assets/skills/cchef.png";
import lc from "../../assets/skills/lc.png";
import { useEffect,useState } from "react";

const Experience = ({state}) => {
    const [education,setEducation]=useState("");
    const [lcrating,setLcrating]=useState("");
    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEductationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    },[state])
    useEffect(() => {
            const {contract}=state;
            const leetcodeDetails=async()=>{
                const lcr = await contract.methods.leetcodeRating().call();
            console.log(lcr);
            setLcrating(lcr);
            }
            contract &&  leetcodeDetails();
      }, [state]);

    return (
        <section className="exp-section">
            <h1 className="title"> Education & Achievements </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {edu.instution}
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* achievements */}
                <div className="education">
            <h1 className="edu-tittle">Achievements</h1>
            <ul className="edu-achievements grid grid-cols-1 md:grid-cols-3 gap-4">
    <li className="achievement bg-blue-200 hover:bg-blue-300 transition-colors duration-300 border border-blue-400 p-4 rounded-md animate-pulse text-gray-900">
        {`Leetcode Max-Rating:1700+`}
    </li>
    <li className="achievement bg-green-200 hover:bg-green-300 transition-colors duration-300 border border-green-400 p-4 rounded-md animate-pulse text-gray-900">
        Leetcode Weekly Contest 360 Global Rank: 4046/30506
    </li>
    <li className="achievement bg-pink-200 hover:bg-pink-300 transition-colors duration-300 border border-pink-400 p-4 rounded-md animate-pulse text-gray-900">
        Solved 700+ problems of Data Structures and Algorithms on Leetcode and GFG
    </li>
</ul>

<div className="certifications-container pt-3">
    <h2 className="edu-tittle mb-2">Certifications</h2>
    <div className="flex flex-col gap-4 ">
    <a href="https://onedrive.live.com/?authkey=%21AO3nGNTOBDfO%2DHM&id=1CA95F762F363E08%21170&cid=1CA95F762F363E08&parId=root&parQt=sharedby&o=OneUp" className="relative h-8 bg-card rounded block flex items-center justify-center">
        <div className="text-blue text-sm font-bold">CodeUtsava 7.0 PS Winner</div>
    </a>
    <a href="https://drive.google.com/file/d/1quEE1zWw5BpjXp6hDnY7EvTxtz9jnN6U/view" className="relative h-8 bg-card rounded block flex items-center justify-center">
        <div className="text-blue text-sm font-bold">Blockchain Basics</div>
    </a>
</div>

<div className="coding-profiles pt-5">
    <h2 className="edu-tittle mb-2">Coding Profiles</h2>
    <div className="flex gap-8">
        <a href="https://leetcode.com/Satya_2003/" className="bg-card rounded-full block overflow-hidden">
            <img src={lc} alt="Leetcode" className="h-full w-auto border border-card" />
        </a>
        <a href="https://www.codechef.com/users/satya_2389" className="bg-card rounded-full block overflow-hidden">
            <img src={cchef} alt="CodeChef" className="h-full w-auto border border-card" />
        </a>
    </div>
</div>






</div>

        </div>
            </div>
        </section>
    )
}

export default Experience
