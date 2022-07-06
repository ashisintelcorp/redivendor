import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Modal as ReactModal } from "react-bootstrap";
import classNames from "classnames";

interface IModal {
    show?: boolean;
    action?: (flag: boolean) => void;
    close?: boolean;
    headerStyle?: boolean;
    title?: string;
    size?: "lg" | "sm" | "xl" | undefined;
    centered?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({ show = true, action = () => { }, close = true, headerStyle = true, title = "", size = "lg", centered = false, className = "", children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <>
            {isLoaded && (
                <ReactModal role="document" className={classNames(className)} show={show} onHide={() => action(!show)} backdrop="static" size={size} centered={centered}>
                    {title != "" && headerStyle && (
                        <div className="modal-top">
                            <div className="modal-header">
                                <div style={{ fontSize: "20px" }} className="modal-title">
                                    {title}
                                </div>
                                {close && (
                                    <button type="button" className="close" onClick={() => action(!show)}>
                                        <AiOutlineClose />
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                    {title != "" && !headerStyle && (
                        <div className="modal-header">
                            <div style={{ fontSize: "20px" }} className="modal-title">
                                {title}
                            </div>
                            {close && (
                                <button type="button" className="close" onClick={() => action(!show)}>
                                    <AiOutlineClose />
                                </button>
                            )}
                        </div>
                    )}
                    <ReactModal.Body>{children}</ReactModal.Body>
                </ReactModal>
            )}
        </>
    );
};