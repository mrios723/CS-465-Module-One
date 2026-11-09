// CS-465 Module Two
// Travlr Getaways Traveler Controller

// Render the Travlr homepage
const index = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways'
    });
};

// Export the controller function
module.exports = {
    index
};
