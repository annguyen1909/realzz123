const Educations = require('../../models/userFunction/educationModel')
const Users = require('../../models/userModel')

const educationCtrl = {
    createEducation: async (req,res) => {
        try{
            const { career, institutionName, startYear, endYear } = req.body


            if(!career || !institutionName || !startYear || !endYear) return res.status(400).json({msg: "Please fill in all fields."})
            if (startYear > endYear) return res.status(400).json({msg: "End year should be greater than or equal to Start year"})
            
            const newEducation = new Educations({
                userId: req.user._id, career, institutionName, startYear, endYear
            })
            // console.log(newEducation)
            await Users.findOneAndUpdate({_id: req.user._id}, {
                $push: {education: [newEducation._id]}
            }, {new: true})
            
            await newEducation.save()
            res.json({
                msg: "Added Complete!",
                newEducation
            })
        }
        catch(err) {
            res.status(500).json({msg: err.message})
        }
    },
    updateEducation: async (req,res) => {
        try{
            const { career, institutionName, startYear, endYear } = req.body
            
            if(!career || !institutionName) return res.status(400).json({msg: "Please fill in all fields."})
            if (startYear > endYear) return res.status(400).json({msg: "End year should be greater than or equal to Start year"})

            await Educations.findOneAndUpdate({
                _id: req.params.id, userId: req.user._id
            }, {career, institutionName, startYear, endYear})

            res.json({msg: "Update Success!"})
        }
        catch(err) {
            res.status(500).json({msg: err.message})
        }

        
    },
    deleteEducation: async (req,res) => {
        try{
            await Educations.findByIdAndDelete({
                _id: req.params.id,
                $or: [
                    {userId: req.user._id}
                ]
            })

            await Users.findOneAndUpdate({_id: req.user._id}, {
                $pull: {education: req.params.id}
            })

            res.json({msg: 'Deleted Education!'})
        }
        catch(err) {
            res.status(500).json({msg: err.message})
        }
    }

}

module.exports =  educationCtrl