const OrderService = require('../../ordern/OrdernServices');

// Mocking the ordernRepository
const mockOrdernRepository = {
  create: jest.fn(),
};

describe('OrderService', () => {
  let orderService;

  beforeEach(() => {
    // Creating a new instance of OrderService with the mock repository
    orderService = new OrderService(mockOrdernRepository);
  });

  afterEach(() => {
    // Resetting mock after each test
    jest.clearAllMocks();
  });

  it('should create an order successfully', async () => {
    // Arrange
    const testData = {
      foods: ["6566fe6d99703ce6b26158a04", "6566fe5999703ce6b26158a02"],
      user: "65649f15f97ae2d9095880b74",
    };

    // Mocking the create method to return a resolved promise
    mockOrdernRepository.create.mockResolvedValue({
      _id: 'sampleOrderId1',
      foodnNames: testData.foods,
      usern: testData.user,
      price: 9999,
    });

    // Act
    const result = await orderService.makeOrder(testData);

    // Assert
    expect(result).toEqual({
      food: testData.foods,
      user: testData.user,
      price: 9999,
    });

    // Verify that the create method was called with the correct data
    expect(mockOrdernRepository.create).toHaveBeenCalledWith(testData);
  });
});


  // it('should throw an error if order creation fails', async () => {
  //   // Arrange
  //   const testData = {
  //     foods: ["6566fe6d9703ce6b26158a04", "6566fe599703ce6b26158a02"],
  //     user: "65649f15f7ae2d9095880b74",
  //   };

 
    // mockOrdernRepository.create.mockResolvedValue({
    //    _id: 'sampleOrderId',
    //     foodnNames: testData.foods, 
    //     usern: testData.user,
    //     price: 10,
    //   } );

    // Act and Assert
  //   await expect(orderService.makeOrder(testData)).rejects.toThrow('Order could not be created');
  // });
// });
