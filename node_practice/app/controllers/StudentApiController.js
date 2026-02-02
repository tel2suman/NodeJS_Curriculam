
const Student =require('../models/student');

class StudentApiController {
  // create student
  async createStudent(req, res) {
    try {
      const { name, email, city } = req.body;
      const data = new Student({
        name,
        email,
        city,
      });

      const student = await data.save();

      return res.status(201).json({
        success: true,
        message: "student created successfully",
        data: student,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // read student
  async getStudent(req, res) {
    try {
      const data = await Student.find();

      return res.status(200).json({
        success: true,
        message: "student list",
        total: data.length,
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // select student
  async getEditStudent(req, res) {
    try {
      const id = req.params.id;
      const data = await Student.findById(id);
      return res.status(200).json({
        success: true,
        message: "get student",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // update student
  async updateStudent(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "student id is required",
        });
      }

      const data = await Student.findByIdAndUpdate(id, req.body, { new: true });

      return res.status(200).json({
        success: true,
        message: "student updated successfully",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // delete student
  async deleteStudent(req, res) {
    try {
      const id = req.params.id;

      await Student.findByIdAndDelete(id);

      return res.status(200).json({
        success: true,
        message: "Student deleted successfully!!",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new StudentApiController();