import React from 'react';
import ReactDOM from 'react-dom/client';
class Ex1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    };

    render() {
        return (
            <div>
                <textarea onChange={this.handleTextChange} />
                <p>{this.state.text}</p>
            </div>
        );
    }
}

class Ex2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxValue: false,
        };
    }

    handleCheckboxChange = (event) => {
        this.setState({ checkboxValue: event.target.checked });
    }

    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" onChange={this.handleCheckboxChange} />
                    Checkbox
                </label>
                <p>Checkbox value: {this.state.checkboxValue.toString()}</p>
            </div>
        );
    }
}

class Ex3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        this.setState({ isChecked: event.target.checked });
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.isChecked}
                        onChange={this.handleCheckboxChange}
                    />
                    Клацни, щоб щось побачити
                </label>
                <p style={{ display: this.state.isChecked ? "block" : "none" }}>
                    Щось
                </p>
            </div>
        );
    }
}

class Ex4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                "Vankyver",
                "Varshava",
                "Kuiv",
                "Chernivtsi",
                "Rome",
                "Milan"
            ],
            selectedCity: ""
        };
    }

    handleCityChange = event => {
        this.setState({
            selectedCity: event.target.value
        });
    };

    render() {
        return (
            <div>
                <select onChange={this.handleCityChange}>
                    <option value="">-- Виберіть місто --</option>
                    {this.state.cities.map(city => (
                        <option value={city} key={city}>
                            {city}
                        </option>
                    ))}
                </select>
                <p>Вибране місто: {this.state.selectedCity}</p>
            </div>
        );
    }
}

class Ex5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        };
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {
        return (
            <div>
                <label>
                    <input type="radio" value="1" checked={this.state.selectedOption === '1'} onChange={this.handleOptionChange} />
                    Перший
                </label>
                <label>
                    <input type="radio" value="2" checked={this.state.selectedOption === '2'} onChange={this.handleOptionChange} />
                    Другий
                </label>
                <label>
                    <input type="radio" value="3" checked={this.state.selectedOption === '3'} onChange={this.handleOptionChange} />
                    Третій
                </label>
                <p>Вибраний: {this.state.selectedOption}</p>
            </div>
        );
    }
}

class Ex6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: []
        };
    }

    handleSave = () => {
        const text = this.textInput.value;
        this.setState(prevState => ({
            texts: [...prevState.texts, text]
        }));
        this.textInput.value = "";
    };

    render() {
        return (
            <div>
                <textarea ref={input => (this.textInput = input)} />
                <button onClick={this.handleSave}>Зберегти</button>
                {this.state.texts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        );
    }
}

class Ex7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ selectedColor: event.target.value });
    }

    render() {
        const colors = ['black', 'pink', 'green', 'dark-blue', 'purple', 'yellow'];

        const colorOptions = colors.map((color) => (
            <option key={color} value={color}>
                {color}
            </option>
        ));

        const selectedStyle = {
            backgroundColor: this.state.selectedColor,
        };

        return (
            <div>
                <select value={this.state.selectedColor} onChange={this.handleChange}>
                    <option value="">Вибери колір</option>
                    {colorOptions}
                </select>
                <p style={selectedStyle}>Зміни мені колір</p>
            </div>
        );
    }
}

class Ex8 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkboxChecked: false,
            selectValue: 'ne vkazano'
        };
    }

    handleSelectChange = (event) => {
        const value = event.target.value;

        this.setState((prevState) => ({
            checkboxChecked: prevState.selectValue === 'ne vkazanо',
            selectValue: value
        }));
    }

    handleCheckboxChange = (event) => {
        const checked = event.target.checked;

        this.setState({
            checkboxChecked: checked,
            selectValue: checked ? 'vkazano' : 'ne vkazano'
        });
    }

    render() {
        return (
            <div>
                <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                    <option value="позначено">позначено</option>
                    <option value="не позначено">не позначено</option>
                </select>

                <input
                    type="checkbox"
                    checked={this.state.checkboxChecked}
                    onChange={this.handleCheckboxChange}
                />
            </div>
        );
    }
}

class Ex9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'option1'
        };
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    render() {
        let selectedOption = this.state.selectedOption;
        let displayText;
        if (selectedOption === 'option1') {
            displayText = <p>Перший абзац</p>;
        } else if (selectedOption === 'option2') {
            displayText = <p>Другий абзац</p>;
        } else if (selectedOption === 'option3') {
            displayText = <p>Третій абзац</p>;
        }

        return (
            <div>
                <select value={this.state.selectedOption} onChange={this.handleOptionChange}>
                    <option value="option1">Опція 1</option>
                    <option value="option2">Опція 2</option>
                    <option value="option3">Опція 3</option>
                </select>
                {displayText}
            </div>
        );
    }
}

class Ex10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: "", options: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleClick(event) {
        event.preventDefault();
        const newOption = <option>{this.state.inputValue}</option>;
        this.setState((prevState) => ({
            options: [...prevState.options, newOption],
            inputValue: "",
        }));
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Додати</button>
                <select>{this.state.options}</select>
            </form>
        );
    }
}

class Ex11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputDisabled: true };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange() {
        this.setState({ inputDisabled: !this.state.inputDisabled });
    }

    render() {
        return (
            <div>
                <label>
                    <input type="checkbox" onChange={this.handleCheckboxChange} />
                    Нажми на мене, щоб розблокувати
                </label>
                <br />
                <input type="text" disabled={this.state.inputDisabled} />
            </div>
        );
    }
}


class Ex12 extends React.Component {
    state = {
        day: '',
        month: '',
        year: '',
        weekday: '',
    }

    componentDidMount() {
        const today = new Date()
        const day = today.getDate()
        const month = today.getMonth() + 1
        const year = today.getFullYear()
        this.setState({ day, month, year }, () => this.calculateWeekday())
    }

    calculateWeekday = () => {
        const { day, month, year } = this.state
        const date = new Date(`${month}/${day}/${year}`)
        const options = { weekday: 'long' }
        const weekday = new Intl.DateTimeFormat('en-US', options).format(date)
        this.setState({ weekday })
    }

    handleSelectChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value }, () => this.calculateWeekday())
    }

    render() {
        const { day, month, year, weekday } = this.state

        const days = Array.from({ length: 31 }, (_, i) => i + 1)
        const months = [
            { id: 1, name: 'January' },
            { id: 2, name: 'February' },
            { id: 3, name: 'March' },
            { id: 4, name: 'April' },
            { id: 5, name: 'May' },
            { id: 6, name: 'June' },
            { id: 7, name: 'July' },
            { id: 8, name: 'August' },
            { id: 9, name: 'September' },
            { id: 10, name: 'October' },
            { id: 11, name: 'November' },
            { id: 12, name: 'December' },
        ]
        const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

        return (
            <div>
                <select name="day" value={day} onChange={this.handleSelectChange}>
                    {days.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select name="month" value={month} onChange={this.handleSelectChange}>
                    {months.map((month) => (
                        <option key={month.id} value={month.id}>
                            {month.name}
                        </option>
                    ))}
                </select>
                <select name="year" value={year} onChange={this.handleSelectChange}>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <p>{weekday}</p>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <p>Ex1</p>
        <Ex1 />

        <p>Ex2</p>
        <Ex2 />

        <p>Ex3</p>
        <Ex3 />

        <p>Ex4</p>
        <Ex4 />

        <p>Ex5</p>
        <Ex5 />

        <p>Ex6</p>
        <Ex6 />

        <p>Ex7</p>
        <Ex7 />

        <p>Ex8</p>
        <Ex8 />

        <p>Ex9</p>
        <Ex9 />

        <p>Ex10</p>
        <Ex10 />

        <p>Ex11</p>
        <Ex11 />

        <p>Ex12</p>
        <Ex12 />


    </div>

);