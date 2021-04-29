import PropTypes from 'prop-types';
import "./Filter.scss"

const Filter = ({ value, onChange }) => (
    <label className="input__title"> Filter contacts by name
        <input
            className="input"
            type="text"
            value={value}
            name="filter"
            onChange={onChange}
        >
        </input>
    </label>
)

Filter.defaultProps = {
    value: '',
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default Filter;