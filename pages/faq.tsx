import Header from "components/frontend/Header"
import MainLayout from "components/frontend/MainLayout"
import { appName } from "app-config"
import Head from "next/head"
import Link from "next/link"
import { Accordion } from "uiComponents/Accordion"

export const FaqPage: React.FC = () => {

    return <>
        <Head>
            <title>FAQs - {appName}</title>
        </Head>
        <MainLayout pageName={<>Frequently <strong>Asked Questions</strong><br/><small className="text-muted">FIND YOUR ANSWER HERE</small></>}>

            <div className="row bg-default">
                <div className="col-md-2"></div>
                <div className="col-md-8 py-5">
                    <div className="white-card">
                        <Accordion data={[
                            { title: 'How to reserved a car here? ', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adipiscing dolgedo. ' },
                            { title: 'How can i drop the rental car? ', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adipiscing dolgedo. ' },
                            { title: 'What happen if i crash the car? ', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adipiscing dolgedo. ' },
                            { title: 'How can i select a car rent? ', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adipiscing dolgedo. ' },
                            { title: 'Do you have VIP access to airport?  ', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat adipiscing dolgedo. ' },
                        ]} />
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>

        </MainLayout>
    </>
}

export default FaqPage