using AutoMapper;
using storeDB.dataAccses;
using storeDB.DOTs;
using storeDB.models;

namespace storeDB.businessLogic{

public class orderBL{
    
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    private readonly orderDA _orderDA;

public orderBL( AppDbContext context , IMapper mapper){
    _context = context;
    _mapper = mapper;
    _orderDA = new orderDA(_context ,_mapper);

    }

public OrderDto AddorderBL(addOrderModel addOrderModel ){
    OrderDto orderDtoVar = new OrderDto();
    
    orderDtoVar= _orderDA.addOrder(orderDtoVar);
    return orderDtoVar;
}

}

}