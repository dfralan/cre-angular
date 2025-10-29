using Microsoft.AspNetCore.Mvc;

namespace CRE.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApiController : ControllerBase
    {
        [HttpGet("dashboard")]
        public IActionResult GetDashboardData()
        {
            var dashboardData = new
            {
                monthlyTargets = new[]
                {
                    new { month = "Jan", value = 150 },
                    new { month = "Feb", value = 350 },
                    new { month = "Mar", value = 180 },
                    new { month = "Apr", value = 250 },
                    new { month = "May", value = 160 },
                    new { month = "Jun", value = 170 },
                    new { month = "Jul", value = 260 },
                    new { month = "Aug", value = 90 },
                    new { month = "Sep", value = 240 },
                    new { month = "Oct", value = 320 },
                    new { month = "Nov", value = 210 },
                    new { month = "Dec", value = 80 }
                },
                currentRevenue = 3287,
                target = 20000,
                progressPercentage = 75.55
            };

            return Ok(dashboardData);
        }
    }
}