const Event = require('./eventSchema')


// -- CREATE NEW EVENT, INLOGGED USER -- //

exports.newEvent = (req, res) => {

    Event.create({
        userId:         req.userData.id,
        title:          req.body.title,
        description:    req.body.description,
        date:           req.body.date,
    })
    .then(data => {
        res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Event was created successfully!',
            data
        })
    })
    .catch(err => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create a new event...',
            err
        })
    })

}


// -- GET ALL EVENTS FROM INLOGGED USER -- //

exports.getAllEventsFromUser = (req, res) => {

    if(req.userData.id !== req.params.userId) {
        return res.status(403).json({
            statusCode: 403,
            status: false,
            message: 'You do not have access to this content!'
        })
    }
    
    Event.find({ userId: req.params.userId }, (err, events) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...'
            })
        }

        if(!events) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'This user does not exist...'
            })
        }

        res.status(200).json(events)

    }).sort({date: 1})
}

// -- GET ONE EVENT FROM INLOGGED USER -- //

exports.getOneEvent = (req, res) => {

    Event.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...',
            })
        }

        if(!result) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Ooops this event does not exist...'
            })
        }

        Event.findById(req.params.id)
            .then(event => res.status(200).json(event))
            .catch( err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Internal server error',
                    err
                })
            })

    })
}


// -- DELETE EVENT, INLOGGED USER -- //

exports.deleteEvent = (req, res) => {


    Event.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Ooops something went wrong...',
            })
        }

        if(!result) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Ooops this event does not exist...'
            })
        }

        Event.findByIdAndDelete(req.params.id)
            .then(event => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Event deleted successfully!',
                    event
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to delete event...',
                    err
                })
            })

    })

}



