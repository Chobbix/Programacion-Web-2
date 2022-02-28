const Streak = require("../models/StreakSchema");

exports.streakGetById = async (req, res) => {
    const { id } = req.params;

    const streak = await Streak.findById(id).populate("_community").populate("_user");

    if (streak) {
        res.send(streak);
    }
    else {
        res.status(404).send({message: "Streak not found"});
    }
};

exports.streakCreate = async (req, res) => {
    const { body } = req;

    const streak = new Streak(body);

    await streak
    .save()
    .then(() => {
        res.send(streak);
        console.log("Succesful streak creation");
    })
    .catch((err) => {
        console.log("Could not create a streak", err);
        res.status(500).send({message: "Could not create a streak", err});
    });
}

exports.streakUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const streak = await Streak.findById(id);

    if (streak) {
        await streak.updateOne(body)
        res.send();
    }
    else {
        res.status(404).send({message: "Streak not found. Could not update data"});
    }
};

exports.streakDelete = async (req, res) => {
    const { id } = req.params;

    const streak = await Streak.findById(id);

    if (streak) {
        await streak.deleteOne();
        res.send();
    }
    else {
        res.status(404).send({message: "Streak not found. Could not delete data"});
    }
};