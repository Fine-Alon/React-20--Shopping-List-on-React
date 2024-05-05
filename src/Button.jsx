
const Button = () => {

    const submitBtn = (e) => {
        e.preventDefault()
        console.log('was submit')
    }

    return (
        <button
            className='add_btn'
            onClick={submitBtn}
            type="submit">
            Add new product
        </button>
    )
}

export default Button;
