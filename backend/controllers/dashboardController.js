import {
  getDashboardStatus,
  pendingInProgressService,
  recentActivitiesService,
} from "../services/dashboardServices.js";

export async function dashboardStatusController(req, res, next) {
  try {
    const status = await getDashboardStatus();

    if (!status) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to fetch status" });
    }

    res.status(200).json({
      success: true,
      message: "Dashboard status fetched successfully",
      data: status,
    });
  } catch (error) {
    next(error);
  }
}

//recent activities

export async function recentActivitiesController(req, res) {
  try {
    const activities = await recentActivitiesService();

    if (!activities) {
      return res
        .status(404)
        .json({ success: false, message: "Activities not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Recent activities fetched successfully",
      data: activities,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error recent activities controller" });
  }
}

//pending or in progress nois

export async function pendingInProgressController(req, res) {
  try {
    const activities = await pendingInProgressService();

    if (!activities) {
      return res
        .status(404)
        .json({ success: false, message: "No Pending or In Progress Nois" });
    }

    return res.status(200).json({
      success: true,
      message: "Pending or In Progress clients fetched successfully",
      data: activities,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in pending or in progress controller",
    });
  }
}
