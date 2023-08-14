using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using storeDB.businessLogic;
using storeDB.DOTs;
using storeDB.models;

namespace storeDB.Controllers;

[ApiController]
[Route("[controller]")]
public class orderController : ControllerBase
{

  private readonly AppDbContext _context;
 
  private readonly IMapper _mapper;

public  orderController( AppDbContext context , IMapper mapper){
        _context=context;
        _mapper=mapper;

    }

[HttpPost("addOrderC")]

public IActionResult addOrderC([FromBody] addOrderModel orderModel ){

  ResponseContract<OrderDto> responseContract = new ResponseContract<OrderDto>();

  try {
    orderBL _orderBL = new orderBL(_context ,_mapper);
    responseContract.Data = _orderBL.AddorderBL(orderModel);
    responseContract.Succeeded = true;

  }catch (Exception ex){
    responseContract.Succeeded = false;
    responseContract.Massage = ex.Message;

  }
  return Ok(responseContract);

}

}