import React from "react";

export interface IFormInput {
    defaultValue?: string;
    label?: string;
    helpText?: string;
    placeholder?: string;
    wrapperClasses?: string;
    className?: string;
    prependText?: React.ReactNode;
    appendText?: React.ReactNode;
    required?: boolean;
    readOnly?: boolean;
    multiple?: boolean;
    type?: 'text' | 'date' | 'number' | 'password' | 'checkbox' | 'radio' | 'range' | 'email' | 'file' | 'url';
    style?: React.CSSProperties;
    maxLength?: number;
    minLength?: number;
    min?: string | number;
    max?: string | number;
    register: any;
    error?: string;
}

export interface IFormTextarea {
    defaultValue?: string;
    label?: string;
    helpText?: string;
    placeholder?: string;
    wrapperClasses?: string;
    className?: string;
    required?: boolean;
    readOnly?: boolean;
    style?: React.CSSProperties;
    rows?: number;
    maxLength?: number;
    minLength?: number;
    register: any;
    error?: string;
}

export interface IFormSelect {
    defaultValue?: string;
    label?: string;
    helpText?: string;
    placeholder?: string;
    wrapperClasses?: string;
    className?: string;
    prependText?: React.ReactNode;
    appendText?: React.ReactNode;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    multiple?: boolean;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    maxLength?: number;
    minLength?: number;
    min?: string | number;
    max?: string | number;
    register: any;
    error?: string;
    children: React.ReactNode;
}

export interface IFormButton {
   
    wrapperClasses?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loadingText?: boolean;
    style?: React.CSSProperties;
    text: string;
    title?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}