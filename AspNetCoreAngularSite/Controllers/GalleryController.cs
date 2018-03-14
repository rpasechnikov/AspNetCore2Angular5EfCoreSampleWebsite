using Microsoft.AspNetCore.Mvc;

namespace Client_Core.Controllers
{
    public class GalleryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
