import Inquiry from "../models/Inquiry.js";

/*
|--------------------------------------------------------------------------
| Create New Inquiry
|--------------------------------------------------------------------------
| Public API
| POST /api/inquiries
*/
export const createInquiry = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      service,
      message,
    } = req.body;

    // Basic validation
    if (!fullName || !phone || !email || !service) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Create inquiry
    const inquiry = await Inquiry.create({
      fullName,
      phone,
      email,
      service,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
      inquiry,
    });
  } catch (error) {
    console.error("Create Inquiry Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/*
|--------------------------------------------------------------------------
| Get All Inquiries
|--------------------------------------------------------------------------
| Admin API
| GET /api/inquiries
*/
export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      inquiries,
    });
  } catch (error) {
    console.error("Get Inquiries Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/*
|--------------------------------------------------------------------------
| Get Single Inquiry
|--------------------------------------------------------------------------
| Admin API
| GET /api/inquiries/:id
*/
export const getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found.",
      });
    }

    res.status(200).json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error("Get Inquiry Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/*
|--------------------------------------------------------------------------
| Update Inquiry Status
|--------------------------------------------------------------------------
| Admin API
| PUT /api/inquiries/:id
*/
export const updateInquiry = async (req, res) => {
  try {
    const { status } = req.body;

    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found.",
      });
    }

    if (status) {
      inquiry.status = status;
    }

    await inquiry.save();

    res.status(200).json({
      success: true,
      message: "Inquiry updated successfully.",
      inquiry,
    });
  } catch (error) {
    console.error("Update Inquiry Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/*
|--------------------------------------------------------------------------
| Delete Inquiry
|--------------------------------------------------------------------------
| Admin API
| DELETE /api/inquiries/:id
*/
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found.",
      });
    }

    await Inquiry.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Inquiry deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Inquiry Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
