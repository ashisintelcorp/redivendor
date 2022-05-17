import Head from "next/head";
import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import classNames from "classnames";

interface IAccordionData {
    title: string; content: string;
}

interface IAccordion {
    data?: IAccordionData[] | [],
    className?: string;
    html?: boolean;
}

export const Accordion: React.FC<IAccordion> = ({ data = [], className = "", html = false }) => {
    const [selItem, setSelItem] = useState(-1);
    return (
        <>
            <div className={classNames(className)}>
                <div className="accordion-container">
                    {data.length > 0 && data.map((item, key) => (
                        <div key={key} className={classNames("accordion-single", { show: selItem == key })}>
                            <div
                                onClick={() => {
                                    if (selItem == key) setSelItem(-1);
                                    else setSelItem(key);
                                }}
                                className="title-container"
                            >
                                <div className="title">{item.title}</div>
                                <div className="accordion-btn">{selItem == key ? <RiArrowUpSLine size="30" /> : <RiArrowDownSLine size="30" />}</div>
                            </div>
                            {html ? <div dangerouslySetInnerHTML={{ __html: item.content }} className="content" /> : <div className="content">{item.content}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};