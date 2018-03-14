using Microsoft.AspNetCore.Mvc;

namespace Client_Core.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
