module.exports.questions = function(application, req, res){

    if(!req.session.user) {
        res.render("error");
    } else {
	    res.render("questions");
    }
};