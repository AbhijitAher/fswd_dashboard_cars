import Api from "./axiosInstance";

const InventoryServices = {
  async getCarInventory(payload) {
    // const response = await Api().get(`api/inventory/?filters=${payload}`);
    const response = await Api().get(`api/inventory`);
    return response;
  },
};

export default InventoryServices;
