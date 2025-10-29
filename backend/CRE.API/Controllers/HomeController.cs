using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace CRE.API.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            var wwwroot = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
            var indexFile = Path.Combine(wwwroot, "index.html");

            if (System.IO.File.Exists(indexFile))
            {
                return PhysicalFile(indexFile, "text/html");
            }

            return Content("CRE.API is running. Build/publish the Angular frontend into /wwwroot to serve the SPA.", "text/plain");
        }
    }
}