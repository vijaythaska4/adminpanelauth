import Policy from "../Model/PoliceSchame.js"

export default {
    policeycreate: async (req, res) => {
        try {
            const { title, content, type } = req.body
            const abouts = await Policy(req.body)

            const data = await abouts.save()
            return res.status(201).json({ message: "Policy create successfully", data: abouts })
        } catch (error) {
            return res.status(500).send({
                message: "internal server errro",
                succen: false,
                error: error.message

            })

        }
    },

    //<-----------------------updatetermconditions---------------------->

    Termconditionsupdate: async (req, res) => {
        try {
            const abouts = await Policy.findOneAndUpdate({ type: 0 }, req.body, { new: true });

            if (!abouts) {
                return res.status(404).send({
                    message: "policey not found",
                    success: false
                });
            }
    
            return res.status(200).send({
                message: "policey updated successfully",
                success: true,
                data: abouts
            });
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });
        }
    },

    //<-----------------------updateprivacypoicey---------------------->


    privacypoliceyupdate: async (req, res) => {
        try {
            const abouts = await Policy.findOneAndUpdate({ type: 1 }, req.body, { new: true });

            if (!abouts) {
                return res.status(404).send({
                    message: "policey not found",
                    success: false
                });
            }
    
            return res.status(200).send({
                message: "policey updated successfully",
                success: true,
                data: abouts
            });
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });
        }
    },


    //<-----------------------gettermconditions---------------------->
    
    termsconditionsget:async (req, res) => {
        try {
            const aboutInfo = await Policy.findOne({ type: 0 });
            if (!aboutInfo) {
                return res.status(404).send({
                    message: "policey information not found",
                    success: false
                });
            }
            return res.status(200).send({
                data: aboutInfo,
                message: "policey information retrieved successfully",
                success: true
            });
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });
        }
    },



    //<---------------------getprivocypolicey---------------------->
    privacypoliceyget:async (req, res) => {
        try {
            const aboutInfo = await Policy.findOne({ type: 1 });
            if (!aboutInfo) {
                return res.status(404).send({
                    message: "policey information not found",
                    success: false
                });
            }
            return res.status(200).send({
                data: aboutInfo,
                message: "policey information retrieved successfully",
                success: true
            });
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });
        }
    },
    //<---------------------updateAbouts---------------------->
    aboutsupdate: async (req, res) => {
        try {
            const abouts = await Policy.findOneAndUpdate({ type: 2 }, req.body, { new: true });

            if (!abouts) {
                return res.status(404).send({
                    message: "Abouts not found",
                    success: false
                });
            }
    
            return res.status(200).send({
                message: "Abouts updated successfully",
                success: true,
                data: abouts
            });
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });
        }
    },
    //<----------------------------aboutsget-------------------------->
    
    aboutsget:async (req, res) => {
        try {
            const aboutInfo = await Policy.findOne({ type: 2 });
            if (!aboutInfo) {
                return res.status(404).send({
                    message: "About information not found",
                    success: false
                });
            }
            return res.status(200).send({
                data: aboutInfo,
                message: "About information retrieved successfully",
                success: true
            });
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });
        }
    }
}