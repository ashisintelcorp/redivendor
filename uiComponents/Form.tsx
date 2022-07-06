import classNames from "classnames";
import { FaSpinner } from "react-icons/fa";
import { IFormButton, IFormInput, IFormSelect, IFormTextarea } from "./models/form";

export const FormInput: React.FC<IFormInput> = ({ defaultValue = "", label = "", helpText = "", required = false, maxLength = 255, minLength = 0, type = "text", placeholder = "", wrapperClasses = "", className = "form-control", style = {}, readOnly = false, multiple = false, register, error = "", prependText = "", appendText = "", min = "", max = "" }) => {
    return (
        <>
            <div className={wrapperClasses != "" ? wrapperClasses : ""}>
                {label != "" && (
                    <label htmlFor={register?.name ? register.name : ""}>
                        {label}
                        {required ? <span className="text-danger ml-1">*</span> : ""}
                    </label>
                )}
                {type != "file" ? (
                    prependText == "" && appendText == "" ? (
                        <>
                            <input defaultValue={defaultValue} {...register} type={type} style={style} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} id={register?.name ? register.name : ""} placeholder={placeholder != "" ? placeholder : ""} maxLength={maxLength} minLength={minLength} min={min} max={max} />
                        </>
                    ) : prependText != "" ? (
                        <>
                            {
                                <div className={classNames("input-group", { "is-invalid": error != "" })}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">{prependText}</span>
                                    </div>
                                    <input defaultValue={defaultValue} {...register} type={type} style={style} readOnly={readOnly} className={classNames(className)} id={register?.name ? register.name : ""} placeholder={placeholder != "" ? placeholder : ""} maxLength={maxLength} minLength={minLength} min={min} max={max} />
                                </div>
                            }
                        </>
                    ) : (
                        <>
                            {
                                <div className={classNames("input-group", { "is-invalid": error != "" })}>
                                    <input defaultValue={defaultValue} {...register} type={type} style={style} readOnly={readOnly} className={classNames(className)} id={register?.name ? register.name : ""} placeholder={placeholder != "" ? placeholder : ""} maxLength={maxLength} minLength={minLength} min={min} max={max} />
                                    <div className="input-group-append">
                                        <span className="input-group-text">{appendText}</span>
                                    </div>
                                </div>
                            }
                        </>
                    )
                ) : (
                    <>
                        <input defaultValue={defaultValue} {...register} multiple={multiple} type={type} style={style} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} id={register?.name ? register.name : ""} maxLength={maxLength} minLength={minLength} min={min} max={max} />
                    </>
                )}
                <div className="invalid-feedback">{error}</div>
                {helpText != "" && <small className="form-text text-muted">{helpText}</small>}
            </div>
        </>
    );
};

export const FormTextarea: React.FC<IFormTextarea> = ({ defaultValue = "", label = "", helpText = "", required = false, maxLength = "", minLength = 0, placeholder = "", wrapperClasses = "", className = "form-control", style = {}, rows = 4, readOnly = false, register, error = "" }) => {
    return (
        <>
            <div className={wrapperClasses != "" ? wrapperClasses : ""}>
                {label != "" && (
                    <label htmlFor={register?.name ? register.name : ""}>
                        {label}
                        {required ? <span className="text-danger ml-1">*</span> : ""}
                    </label>
                )}
                <textarea defaultValue={defaultValue} {...register} style={style} rows={rows} id={register?.name ? register.name : ""} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} placeholder={placeholder != "" ? placeholder : ""} maxLength={maxLength} minLength={minLength}></textarea>
                <div className="invalid-feedback">{error}</div>
                {helpText != "" && <small className="form-text text-muted">{helpText}</small>}
            </div>
        </>
    );
};

export const FormSelect: React.FC<IFormSelect> = ({ defaultValue = "", label = "", helpText = "", required = false, disabled = false, wrapperClasses = "", className = "form-control custom-select", style = {}, readOnly = false, register, error = "", children }) => {
    return (
        <>
            <div className={wrapperClasses != "" ? wrapperClasses : ""}>
                {label != "" && (
                    <label htmlFor={register?.name ? register.name : ""}>
                        {label}
                        {required ? <span className="text-danger ml-1">*</span> : ""}
                    </label>
                )}
                <select defaultValue={defaultValue} {...register} style={style} disabled={disabled} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} id={register?.name ? register.name : ""}>
                    {children}
                </select>
                <div className="invalid-feedback">{error}</div>
                {helpText != "" && <small className="form-text text-muted">{helpText}</small>}
            </div>
        </>
    );
};

export const FormButton: React.FC<IFormButton> = ({ wrapperClasses = "", className = "btn", type = "submit", disabled = false, loadingText = true, onClick = () => { }, text = "Save Changes", style = {}, title = "" }) => {
    return (
        <>
            {wrapperClasses != "" ? (
                <div className={wrapperClasses}>
                    <button title={title} className={classNames("form-btn", className)} style={style} type={type} disabled={disabled}>
                        {disabled && <FaSpinner className="fa-spin mr-2" />} {!loadingText && disabled ? "" : text}
                    </button>
                </div>
            ) : (
                <>
                    <button title={title} className={classNames("form-btn", className)} style={style} type={type} disabled={disabled}>
                        {disabled && <FaSpinner className="fa-spin mr-2" />} {!loadingText && disabled ? "" : text}
                    </button>
                </>
            )}
        </>
    );
};
