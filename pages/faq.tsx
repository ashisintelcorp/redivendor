import Header from "components/frontend/Header"
import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"

export const FAQ: React.FC = () =>{
    return <MainLayout>
    <Head>
        <title>FAQ - {appName}</title>
    </Head>
    <div className="position-relative">
    <div className="faq-container">
    <h1 className="faq-title">
        Frequenty Asked Questions
    </h1>
    <main className="accordion">
        <div className="faq-img">
            <img src="img/faq.svg" alt="" className="accordion-img"/>
        </div>
        <div className="content-accordion">
            <div className="question-answer">
                <div className="question">
                    <h3 className="title-question">
                        Do you want to book a car ?
                    </h3>
                    <button className="question-btn">
                        <span className="up-icon">
                            <i className="fas fa-chevron-up"></i>
                        </span>
                        <span className="down-icon">
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </button>
                </div>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. 
                        Quisquam assumenda sapiente 
                        mollitia excepturi quos id 
                        magnam obcaecati non est? 
                        Maiores?</p>
                </div>
            </div>
            <div className="question-answer">
                <div className="question">
                    <h3 className="title-question">
                      HOW TO BOOK ?
                    </h3>
                    <button className="question-btn">
                        <span className="up-icon">
                            <i className="fas fa-chevron-up"></i>
                        </span>
                        <span className="down-icon">
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </button>
                </div>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. 
                        Quisquam assumenda sapiente 
                        mollitia excepturi quos id 
                        magnam obcaecati non est? 
                        Maiores?</p>
                </div>
            </div>
            <div className="question-answer">
                <div className="question">
                    <h3 className="title-question">
                        Which is better suv or hatchback ?
                    </h3>
                    <button className="question-btn">
                        <span className="up-icon">
                            <i className="fas fa-chevron-up"></i>
                        </span>
                        <span className="down-icon">
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </button>
                </div>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. 
                        Quisquam assumenda sapiente 
                        mollitia excepturi quos id 
                        magnam obcaecati non est? 
                        Maiores?</p>
                </div>
            </div>
            <div className="question-answer">
                <div className="question">
                    <h3 className="title-question">
                    how to cancel booking ?
                    </h3>
                    <button className="question-btn">
                        <span className="up-icon">
                            <i className="fas fa-chevron-up"></i>
                        </span>
                        <span className="down-icon">
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </button>
                </div>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. 
                        Quisquam assumenda sapiente 
                        mollitia excepturi quos id 
                        magnam obcaecati non est? 
                        Maiores?</p>
                </div>
            </div>
           
        </div>
    </main>
</div>
    </div>
    </MainLayout>
}
export default FAQ