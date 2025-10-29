using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApiController : ControllerBase
    {
        [HttpGet("mockdata")]
        public IActionResult GetMockData()
        {
            var mockData = new
            {
                Message = "This is a mock API response",
                Timestamp = DateTime.UtcNow
            };

            return Ok(mockData);
        }
    }
}