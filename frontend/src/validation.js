const validation = formData => {

    let errors={}

    if(!formData.title) {
        errors.title='Du måste ange ett namn på eventet'
    }
    if(!formData.description) {
        errors.description='Du måste ange en beskrivning av eventet'
    }
    if(!formData.date) {
        errors.date='Du måste ange datum och tid för eventet'
    }
    if(!formData.date) {
        errors.date='Du måste ange datum och tid för eventet'
    }
    if(!formData.email) {
        errors.email='Du måste ange din email'
    }
    if(!formData.password) {
        errors.password='Du måste ange ett lösenord'
    }
    if(!formData.firstName) {
        errors.firstName='Du måste skriva i ditt förnamn'
    }

    return errors;
}

export default validation