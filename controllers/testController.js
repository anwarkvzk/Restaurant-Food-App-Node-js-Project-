const testUserController = (req, res) => {
    try {
       res.status(200).send(
       '<h1>Test user data</h1>'
       ) 
    } catch (error) {
        console.log('error In Test Api', error)
    }

}

module.exports = {testUserController}