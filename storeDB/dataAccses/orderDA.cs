
using AutoMapper;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using storeDB.DOTs;

namespace storeDB.dataAccses{
public class orderDA{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public orderDA ( AppDbContext context , IMapper mapper){
        _context=context;
        _mapper=mapper;

    }

   public OrderDto addOrder(OrderDto orderDto) {
    var orderVar = _mapper.Map<Order>(orderDto);
    _context.Order.Add(orderVar);
    _context.SaveChanges();
    return _mapper.Map<OrderDto>(orderVar);

   }

}
}