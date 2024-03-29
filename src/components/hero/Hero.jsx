import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import devImg from '../../assets/skills/developer.jpeg'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [des,setDes]=useState("");
    const [cid,setCid]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const description=async()=>{
          const descriptionText = await contract.methods.description().call();
          setDes(descriptionText);
        }
        contract && description();
      },[state])
      useEffect(()=>{
          const {contract}=state;
          const cidOfImage=async()=>{
            const cid = await contract.methods.imageLink().call();
            setCid(cid);
          }
          contract && cidOfImage();
        },[state])

        const openEmailClient = () => {
            window.open('mailto:satyaprakashjena492@gmail.com');
        };

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p> Hey 👋 What's up? I'm <span> Satya Prakash Jena </span>
                🚀</p>
                <h1 className="animate-pulse">"Developing innovative applications, solving complex problems with frontend, web3, DSA."</h1>
                <h3>{des}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
    <ModalBody className="bg-gray-800 rounded-lg p-4">
        <Row className="text-align flex gap-2">
            <label htmlFor="" className="text-white">
                Mail Id - satyaprakashjena492@gmail.com
            </label>
            <button
                className="msg-btn bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={openEmailClient}
            >
                Get in Touch
            </button>
        </Row>
    </ModalBody>
</Modal>



                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://gateway.pinata.cloud/ipfs/${cid}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
