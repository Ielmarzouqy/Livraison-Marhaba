const CreateMenuUseCase = require("../../../application/usecases/menu/CreateMenuUseCase");
const GetMenuByIdUseCase = require("../../../application/usecases/menu/GetMenuByIdUseCase");
const UpdateMenuUseCase = require("../../../application/usecases/menu/UpdateMenuUseCase");
const DeleteMenuUseCase = require("../../../application/usecases/menu/DeleteMenuUseCase");
const GetAllMenusUseCase = require("../../../application/usecases/menu/GetAllMenusUseCase");

class MenuController {
  constructor() {
    this.createMenuUseCase = new CreateMenuUseCase();
    this.getMenuByIdUseCase = new GetMenuByIdUseCase();
    this.updateMenuUseCase = new UpdateMenuUseCase();
    this.deleteMenuUseCase = new DeleteMenuUseCase();
    this.getAllMenusUseCase = new GetAllMenusUseCase();
  }

  createMenu = async (req, res) => {
    const  inputData  = req.body;
    const image = req.file.filename ;
    const data = {...inputData , image } 
    const { status, message, menu } = await this.createMenuUseCase.execute(data);

    res.status(status).json({ message, menu });
  };

  getMenuById = async (req, res) => {
    const { menuId } = req.params;

    const { status, message, menu } = await this.getMenuByIdUseCase.execute(menuId);

    res.status(status).json({ message, menu });
  };

  updateMenu = async (req, res) => {
    const { menuId } = req.params;
    const  data  = req.body;

    const { status, message, menu } = await this.updateMenuUseCase.execute(menuId, data);

    res.status(status).json({ message, menu });
  };

  deleteMenu = async (req, res) => {
    const { menuId } = req.params;

    const { status, message } = await this.deleteMenuUseCase.execute(menuId);

    res.status(status).json({ message });
  };

  getAllMenus = async (req, res) => {
    const { status, message, menus } = await this.getAllMenusUseCase.execute();
    res.status(status).json({ message, menus });
  };
}

module.exports = MenuController;