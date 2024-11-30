import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

const Droplist = () => {
    return (
        <>
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        </>
    );
};

export default Droplist;
