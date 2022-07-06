import { Modal } from "uiComponents/Modal"
import SearchBox from "./SearchBox";

export const SearchModal: React.FC<{
    show: boolean;
    setShowSearchModal: (flag: boolean) => void;
}> = ({ show = false, setShowSearchModal = () => { } }) => {
    return <>
        <Modal show={show} className="search-modal">
            <SearchBox modal setModal={flag => setShowSearchModal(flag)} />
        </Modal>
    </>
}

export default SearchModal