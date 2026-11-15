/* ==========================================================================
   PREFERA DESIGN STUDIO - JAVASCRIPT LOGIC & INTERACTIONS (REVISED)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initHeroSlider();
  initPortfolioFilters();
  initProjectModal();
  initContactForm();
  initMobileMenu();
});

// 1. Sticky Header scroll effect
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 2. Hero Background Image Carousel
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return;

  let currentIdx = 0;
  setInterval(() => {
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add('active');
  }, 5000);
}

// 3. Portfolio Category Filtering (12 Featured on 'All Works', Full entries on category tabs)
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Initial state: show only featured projects (12 projects)
  applyFilter('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      applyFilter(filterValue);
    });
  });

  function applyFilter(filterValue) {
    projectCards.forEach(card => {
      const isFeatured = card.getAttribute('data-featured') === 'true';
      const cardCat = card.getAttribute('data-category');

      let shouldShow = false;
      if (filterValue === 'all') {
        shouldShow = isFeatured; // Exactly 12 featured projects
      } else {
        shouldShow = (cardCat === filterValue); // All projects in this category (>= 6)
      }

      if (shouldShow) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 250);
      }
    });
  }
}

// 4. Project Lightbox & Gallery Modal
const projectsData = [
  {
    "id": "DZZUDmMgQek",
    "folder": "post_002_20260610_063549_DZZUDmMgQek",
    "title": "BS House , Cosmo Park",
    "category": "Residential",
    "featured": true,
    "status": "Completed , 2026",
    "builder": "@palaisconstruction",
    "photo_by": "@williamsaimin",
    "caption": "Project : BS House , Cosmo Park \nStatus : Completed , 2026\nBuild by : @palaisconstruction \nPhotography : @williamsaimin \n.\n.\n.\n.\n.\n#preferadesign #interiordesignjakarta #interiorarchitect #preferainterior",
    "date": "2026-06-10T06:35:49",
    "image_count": 6,
    "images": [
      "/prefera-temp/assets/projects/post_002_20260610_063549_DZZUDmMgQek/image_01.jpg",
      "/prefera-temp/assets/projects/post_002_20260610_063549_DZZUDmMgQek/image_02.jpg",
      "/prefera-temp/assets/projects/post_002_20260610_063549_DZZUDmMgQek/image_03.jpg",
      "/prefera-temp/assets/projects/post_002_20260610_063549_DZZUDmMgQek/image_04.jpg",
      "/prefera-temp/assets/projects/post_002_20260610_063549_DZZUDmMgQek/image_05.jpg",
      "/prefera-temp/assets/projects/post_002_20260610_063549_DZZUDmMgQek/image_06.jpg"
    ]
  },
  {
    "id": "DXGVIy3AQGL",
    "folder": "post_007_20260414_043654_DXGVIy3AQGL",
    "title": "DA House , New Jasmine",
    "category": "Residential",
    "featured": true,
    "status": "Completed , 2025",
    "builder": "@palaisconstruction",
    "photo_by": "@leowardistudio",
    "caption": "Project : DA House , New Jasmine \nStatus : Completed , 2025\nBuild by : @palaisconstruction \nPhotography : @leowardistudio \nDecorative Lights : @ardentelighting \nStyling : @100props \n.\n.\n.\n.\n.\n#preferadesign #preferainterior #interiordesignjakarta #interiorarchitecture #architecture",
    "date": "2026-04-14T04:36:54",
    "image_count": 4,
    "images": [
      "/prefera-temp/assets/projects/post_007_20260414_043654_DXGVIy3AQGL/image_01.jpg",
      "/prefera-temp/assets/projects/post_007_20260414_043654_DXGVIy3AQGL/image_02.jpg",
      "/prefera-temp/assets/projects/post_007_20260414_043654_DXGVIy3AQGL/image_03.jpg",
      "/prefera-temp/assets/projects/post_007_20260414_043654_DXGVIy3AQGL/image_04.jpg"
    ]
  },
  {
    "id": "DK3y5JDTjp_",
    "folder": "post_019_20250614_065134_DK3y5JDTjp_",
    "title": "YJ House , Sunter",
    "category": "Residential",
    "featured": true,
    "status": "Completed , 2025",
    "builder": "@sperointerior",
    "photo_by": "Prefera Archive",
    "caption": "Project : YJ House , Sunter \nStatus : Completed , 2025\nBuild by : @sperointerior \n#preferainterior #indonesiadesigninterior #interiordesign #interiordesignjakarta #arsitag #arsilokal #japandi #moderndesign",
    "date": "2025-06-14T06:51:34",
    "image_count": 6,
    "images": [
      "/prefera-temp/assets/projects/post_019_20250614_065134_DK3y5JDTjp_/image_01.jpg",
      "/prefera-temp/assets/projects/post_019_20250614_065134_DK3y5JDTjp_/image_02.jpg",
      "/prefera-temp/assets/projects/post_019_20250614_065134_DK3y5JDTjp_/image_03.jpg",
      "/prefera-temp/assets/projects/post_019_20250614_065134_DK3y5JDTjp_/image_04.jpg",
      "/prefera-temp/assets/projects/post_019_20250614_065134_DK3y5JDTjp_/image_05.jpg",
      "/prefera-temp/assets/projects/post_019_20250614_065134_DK3y5JDTjp_/image_06.jpg"
    ]
  },
  {
    "id": "DDtMU2YTqtS",
    "folder": "post_023_20241218_042224_DDtMU2YTqtS",
    "title": "T House , Golf Island PIK",
    "category": "Residential",
    "featured": false,
    "status": "Completed , 2024",
    "builder": "@palaisconstruction",
    "photo_by": "@jochristianpresents",
    "caption": "Project : T House \nScope : Building Extension + Interior Design\nLocation : Mozart , Golf Island PIK\nStatus : Completed , 2024 \nBuild by : @palaisconstruction\nPhotography : @jochristianpresents \n\n.\n.\n.\n#interiordesign #interiordesignjakarta #interiorarchitecture #arsitekturindonesia #arsilokal #archdaily #interiorideas #homeideas",
    "date": "2024-12-18T04:22:24",
    "image_count": 6,
    "images": [
      "/prefera-temp/assets/projects/post_023_20241218_042224_DDtMU2YTqtS/image_01.jpg",
      "/prefera-temp/assets/projects/post_023_20241218_042224_DDtMU2YTqtS/image_02.jpg",
      "/prefera-temp/assets/projects/post_023_20241218_042224_DDtMU2YTqtS/image_03.jpg",
      "/prefera-temp/assets/projects/post_023_20241218_042224_DDtMU2YTqtS/image_04.jpg",
      "/prefera-temp/assets/projects/post_023_20241218_042224_DDtMU2YTqtS/image_05.jpg",
      "/prefera-temp/assets/projects/post_023_20241218_042224_DDtMU2YTqtS/image_06.jpg"
    ]
  },
  {
    "id": "CzDunTXL0sC",
    "folder": "post_045_20231031_093137_CzDunTXL0sC",
    "title": "Citra Garden Residence",
    "category": "Residential",
    "featured": false,
    "status": "Completed , 2023",
    "builder": "In-House / Specialist",
    "photo_by": "@leowardistudio",
    "caption": "Citra Garden Residence \nFacade Design : @preferadesignstudio \nInterior Design : @thestudiobyer \nStatus : Completed , 2023 \nPhotography : @leowardistudio \n#interiordesignjakarta #interiordesign #preferadesign",
    "date": "2023-10-31T09:31:37",
    "image_count": 1,
    "images": [
      "/prefera-temp/assets/projects/post_045_20231031_093137_CzDunTXL0sC/image_01.jpg"
    ]
  },
  {
    "id": "CmYQYWrr-YB",
    "folder": "post_060_20221220_060321_CmYQYWrr-YB",
    "title": "TA House , PIK 2",
    "category": "Residential",
    "featured": false,
    "status": "On going , 2022",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "TA House, PIK 2\nStatus : On going , 2022\n#preferainterior #interiordesignjakarta",
    "date": "2022-12-20T06:03:21",
    "image_count": 1,
    "images": [
      "/prefera-temp/assets/projects/post_060_20221220_060321_CmYQYWrr-YB/image_01.jpg"
    ]
  },
  {
    "id": "ChrP2RDLpaK",
    "folder": "post_069_20220825_082718_ChrP2RDLpaK",
    "title": "Omoide House , Citra 2",
    "category": "Residential",
    "featured": false,
    "status": "Completed , 2022",
    "builder": "In-House / Specialist",
    "photo_by": "@leowardistudio @motoin.terior",
    "caption": "Omoide House , Citra 2 \nStatus : Completed , 2022\n.\n.\n.\nArchitect : @aryasiek \nInterior design : @preferadesignstudio \nGeneral Contractor : @advicon.indonesia \nInterior Contractor : @riformainterior.id \nPhotograph : @leowardistudio @motoin.terior \n\n#preferainterior #preferadesign #interiordesignjakarta",
    "date": "2022-08-25T08:27:18",
    "image_count": 5,
    "images": [
      "/prefera-temp/assets/projects/post_069_20220825_082718_ChrP2RDLpaK/image_01.jpg",
      "/prefera-temp/assets/projects/post_069_20220825_082718_ChrP2RDLpaK/image_02.jpg",
      "/prefera-temp/assets/projects/post_069_20220825_082718_ChrP2RDLpaK/image_03.jpg",
      "/prefera-temp/assets/projects/post_069_20220825_082718_ChrP2RDLpaK/image_04.jpg",
      "/prefera-temp/assets/projects/post_069_20220825_082718_ChrP2RDLpaK/image_05.jpg"
    ]
  },
  {
    "id": "C65adZRrfVm",
    "folder": "post_039_20240513_053415_C65adZRrfVm",
    "title": "AG House Modern Living",
    "category": "Residential",
    "featured": false,
    "status": "Completed , 2023",
    "builder": "@fammanusantara",
    "photo_by": "@leowardistudio",
    "caption": "AG House \nStatus : Completed , 2023\nFacade Renovation design by : @preferadesignstudio @richardsaimin \nInterior Design by : @thestudiobyer \nBuilt by : @fammanusantara \nPhoto by : @leowardistudio",
    "date": "2024-05-13T05:34:15",
    "image_count": 4,
    "images": [
      "/prefera-temp/assets/projects/post_039_20240513_053415_C65adZRrfVm/image_01.jpg",
      "/prefera-temp/assets/projects/post_039_20240513_053415_C65adZRrfVm/image_02.jpg",
      "/prefera-temp/assets/projects/post_039_20240513_053415_C65adZRrfVm/image_03.jpg",
      "/prefera-temp/assets/projects/post_039_20240513_053415_C65adZRrfVm/image_04.jpg"
    ]
  },
  {
    "id": "DbLAANngWfz",
    "folder": "post_001_20260724_101401_DbLAANngWfz",
    "title": "Tjoetji Sepatoe , Hublife",
    "category": "Commercial & Retail",
    "featured": true,
    "status": "Completed , 2026",
    "builder": "@palaisconstruction",
    "photo_by": "Prefera Archive",
    "caption": "Project : Tjoetji Sepatoe , Hublife \nStatus : Completed , 2026 \nBuild by : @palaisconstruction \n.\n.\n.\n.\n.\n#preferadesign #preferainterior #interiorarchitect #interiordesignjakarta",
    "date": "2026-07-24T10:14:01",
    "image_count": 4,
    "images": [
      "/prefera-temp/assets/projects/post_001_20260724_101401_DbLAANngWfz/image_01.jpg",
      "/prefera-temp/assets/projects/post_001_20260724_101401_DbLAANngWfz/image_02.jpg",
      "/prefera-temp/assets/projects/post_001_20260724_101401_DbLAANngWfz/image_03.jpg",
      "/prefera-temp/assets/projects/post_001_20260724_101401_DbLAANngWfz/image_04.jpg"
    ]
  },
  {
    "id": "DP0HV-lAa_4",
    "folder": "post_013_20251015_031017_DP0HV-lAa_4",
    "title": "Little Athlete , Gading Serpong",
    "category": "Commercial & Retail",
    "featured": true,
    "status": "Completed, 2025",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "Project : Little Athlete , Gading Serpong, Tangerang\nStatus : Completed, 2025\n\n.\n.\n#retailworks #retaildesign #retailinteriordesign #storedesign #interiordesignjakarta #preferainterior #preferadesign #interiordesignjakarta #interiorarchitecture",
    "date": "2025-10-15T03:10:17",
    "image_count": 5,
    "images": [
      "/prefera-temp/assets/projects/post_013_20251015_031017_DP0HV-lAa_4/image_01.jpg",
      "/prefera-temp/assets/projects/post_013_20251015_031017_DP0HV-lAa_4/image_02.jpg",
      "/prefera-temp/assets/projects/post_013_20251015_031017_DP0HV-lAa_4/image_03.jpg",
      "/prefera-temp/assets/projects/post_013_20251015_031017_DP0HV-lAa_4/image_04.jpg",
      "/prefera-temp/assets/projects/post_013_20251015_031017_DP0HV-lAa_4/image_05.jpg"
    ]
  },
  {
    "id": "C7DvbB2L5OC",
    "folder": "post_036_20240517_054950_C7DvbB2L5OC",
    "title": "The Risman Hotel Lounge",
    "category": "Commercial & Retail",
    "featured": true,
    "status": "Completed, 2023",
    "builder": "@riformainterior.id @hendrasutianto",
    "photo_by": "Prefera Archive",
    "caption": "The Risman Hotel \nstatus : Completed, 2023 \ninterior design team : @preferadesignstudio @evelyn.anw \nbuild by : @riformainterior.id @hendrasutianto",
    "date": "2024-05-17T05:49:50",
    "image_count": 4,
    "images": [
      "/prefera-temp/assets/projects/post_036_20240517_054950_C7DvbB2L5OC/image_01.jpg",
      "/prefera-temp/assets/projects/post_036_20240517_054950_C7DvbB2L5OC/image_02.jpg",
      "/prefera-temp/assets/projects/post_036_20240517_054950_C7DvbB2L5OC/image_03.jpg",
      "/prefera-temp/assets/projects/post_036_20240517_054950_C7DvbB2L5OC/image_04.jpg"
    ]
  },
  {
    "id": "DPQT_BvAQqR",
    "folder": "post_017_20251001_052805_DPQT_BvAQqR",
    "title": "Tjoetji Sepatoe , PIK",
    "category": "Commercial & Retail",
    "featured": false,
    "status": "Completed , 2025",
    "builder": "@palaisconstruction",
    "photo_by": "Prefera Archive",
    "caption": "Project : Tjoetji Sepatoe , PIK \nStatus : Completed , 2025\nBuilt by : @palaisconstruction\n\n.\n.\n#retailworks #retaildesign #retailinteriordesign #storedesign #interiordesignjakarta #preferainterior #preferadesign #interiordesignjakarta #interiorarchitecture",
    "date": "2025-10-01T05:28:05",
    "image_count": 6,
    "images": [
      "/prefera-temp/assets/projects/post_017_20251001_052805_DPQT_BvAQqR/image_01.jpg",
      "/prefera-temp/assets/projects/post_017_20251001_052805_DPQT_BvAQqR/image_02.jpg",
      "/prefera-temp/assets/projects/post_017_20251001_052805_DPQT_BvAQqR/image_03.jpg",
      "/prefera-temp/assets/projects/post_017_20251001_052805_DPQT_BvAQqR/image_04.jpg",
      "/prefera-temp/assets/projects/post_017_20251001_052805_DPQT_BvAQqR/image_05.jpg",
      "/prefera-temp/assets/projects/post_017_20251001_052805_DPQT_BvAQqR/image_06.jpg"
    ]
  },
  {
    "id": "DPNa-3ikoSN",
    "folder": "post_018_20250930_023131_DPNa-3ikoSN",
    "title": "Tjoetji Sepatoe , Mall Kelapa Gading 3",
    "category": "Commercial & Retail",
    "featured": false,
    "status": "Completed , 2025",
    "builder": "@palaisconstruction",
    "photo_by": "Prefera Archive",
    "caption": "Project : Tjoetji Sepatoe , Mall Kelapa Gading 3\nStatus : Completed , 2025\nBuilt by : @palaisconstruction\n\n.\n.\n#retailworks #retaildesign #retailinteriordesign #storedesign #interiordesignjakarta #preferainterior #preferadesign #interiordesignjakarta #interiorarchitecture",
    "date": "2025-09-30T02:31:31",
    "image_count": 6,
    "images": [
      "/prefera-temp/assets/projects/post_018_20250930_023131_DPNa-3ikoSN/image_01.jpg",
      "/prefera-temp/assets/projects/post_018_20250930_023131_DPNa-3ikoSN/image_02.jpg",
      "/prefera-temp/assets/projects/post_018_20250930_023131_DPNa-3ikoSN/image_03.jpg",
      "/prefera-temp/assets/projects/post_018_20250930_023131_DPNa-3ikoSN/image_04.jpg",
      "/prefera-temp/assets/projects/post_018_20250930_023131_DPNa-3ikoSN/image_05.jpg",
      "/prefera-temp/assets/projects/post_018_20250930_023131_DPNa-3ikoSN/image_06.jpg"
    ]
  },
  {
    "id": "DFePunBTsW2",
    "folder": "post_022_20250131_020619_DFePunBTsW2",
    "title": "Tjoetji Sepatoe , Cilandak",
    "category": "Commercial & Retail",
    "featured": false,
    "status": "Completed , 2025",
    "builder": "@palaisconstruction",
    "photo_by": "Prefera Archive",
    "caption": "Project : Tjoetji Sepatoe , Cilandak\nStatus : Completed , 2025\nBuilt by : @palaisconstruction\n\n.\n.\n#retailworks #retaildesign #retailinteriordesign #storedesign #interiordesignjakarta #preferainterior #preferadesign #interiordesignjakarta #interiorarchitecture",
    "date": "2025-01-31T02:06:19",
    "image_count": 6,
    "images": [
      "/prefera-temp/assets/projects/post_022_20250131_020619_DFePunBTsW2/image_01.jpg",
      "/prefera-temp/assets/projects/post_022_20250131_020619_DFePunBTsW2/image_02.jpg",
      "/prefera-temp/assets/projects/post_022_20250131_020619_DFePunBTsW2/image_03.jpg",
      "/prefera-temp/assets/projects/post_022_20250131_020619_DFePunBTsW2/image_04.jpg",
      "/prefera-temp/assets/projects/post_022_20250131_020619_DFePunBTsW2/image_05.jpg",
      "/prefera-temp/assets/projects/post_022_20250131_020619_DFePunBTsW2/image_06.jpg"
    ]
  },
  {
    "id": "C96ZNEDzwIm",
    "folder": "post_030_20240727_041642_C96ZNEDzwIm",
    "title": "Dharma Audio Retail Store",
    "category": "Commercial & Retail",
    "featured": false,
    "status": "Completed",
    "builder": "In-House / Specialist",
    "photo_by": "@isai.studios",
    "caption": "Dharma Audio Retail Store\nStatus : Completed \nPhoto by : @isai.studios \n.\n.\n.\n#retailworks #retaildesign #retailinteriordesign #storedesign #interiordesignjakarta #preferainterior #preferadesign #interiordesignjakarta #interiorarchitecture",
    "date": "2024-07-27T04:16:42",
    "image_count": 3,
    "images": [
      "/prefera-temp/assets/projects/post_030_20240727_041642_C96ZNEDzwIm/image_01.jpg",
      "/prefera-temp/assets/projects/post_030_20240727_041642_C96ZNEDzwIm/image_02.jpg",
      "/prefera-temp/assets/projects/post_030_20240727_041642_C96ZNEDzwIm/image_03.jpg"
    ]
  },
  {
    "id": "Ckh3XXcro2N",
    "folder": "post_063_20221104_063423_Ckh3XXcro2N",
    "title": "Urban Coffee Shop Redesign",
    "category": "Commercial & Retail",
    "featured": false,
    "status": "Completed",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "coffee shop interior-redesign in the middle of the city\n#preferainterior #interiordesignjakarta \n\ncc : @kama.stay \n📷 : @isai.studios",
    "date": "2022-11-04T06:34:23",
    "image_count": 2,
    "images": [
      "/prefera-temp/assets/projects/post_063_20221104_063423_Ckh3XXcro2N/image_01.jpg",
      "/prefera-temp/assets/projects/post_063_20221104_063423_Ckh3XXcro2N/image_02.jpg"
    ]
  },
  {
    "id": "DPf9Xi1AWFW",
    "folder": "post_016_20251007_071818_DPf9Xi1AWFW",
    "title": "Gading Orchard Facade Renovation",
    "category": "Architecture & Facade",
    "featured": true,
    "status": "Completed , 2024",
    "builder": "@fammanusantara @danielgiinn",
    "photo_by": "Prefera Archive",
    "caption": "Project : Gading Orchard Facade Renovation \nStatus : Completed , 2024\nBuilt by : @fammanusantara @danielgiinn\n\n.\n.\n.\n.\n.\n#preferadesign #preferainterior #interiordesignjakarta #interiorarchitecture #architecture #golfislandpik #pik #arsilokal #arsitag #arsitekturjakarta",
    "date": "2025-10-07T07:18:18",
    "image_count": 6,
    "images": [
      "/prefera-temp/assets/projects/post_016_20251007_071818_DPf9Xi1AWFW/image_01.jpg",
      "/prefera-temp/assets/projects/post_016_20251007_071818_DPf9Xi1AWFW/image_02.jpg",
      "/prefera-temp/assets/projects/post_016_20251007_071818_DPf9Xi1AWFW/image_03.jpg",
      "/prefera-temp/assets/projects/post_016_20251007_071818_DPf9Xi1AWFW/image_04.jpg",
      "/prefera-temp/assets/projects/post_016_20251007_071818_DPf9Xi1AWFW/image_05.jpg",
      "/prefera-temp/assets/projects/post_016_20251007_071818_DPf9Xi1AWFW/image_06.jpg"
    ]
  },
  {
    "id": "C11SYf9r93n",
    "folder": "post_042_20240108_082944_C11SYf9r93n",
    "title": "Cacamarihouse Architectural Facade",
    "category": "Architecture & Facade",
    "featured": true,
    "status": "completed , 2023",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "@cacamarihouse ‘s face 3D preview \nstatus : completed , 2023\n#interiordesign #interiordesignjakarta #preferadesign #preferainterior",
    "date": "2024-01-08T08:29:44",
    "image_count": 2,
    "images": [
      "/prefera-temp/assets/projects/post_042_20240108_082944_C11SYf9r93n/image_01.jpg",
      "/prefera-temp/assets/projects/post_042_20240108_082944_C11SYf9r93n/image_02.jpg"
    ]
  },
  {
    "id": "CorhDNuANRr",
    "folder": "post_059_20230215_103919_CorhDNuANRr",
    "title": "T House Golf Island Facade",
    "category": "Architecture & Facade",
    "featured": true,
    "status": "Completed",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "on progress T House , Golf Island PIK",
    "date": "2023-02-15T10:39:19",
    "image_count": 0,
    "images": []
  },
  {
    "id": "C3ZzQckrxBr",
    "folder": "post_041_20240216_092103_C3ZzQckrxBr",
    "title": "Bollen House Architectural Proposal",
    "category": "Architecture & Facade",
    "featured": false,
    "status": "Completed",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "Bollen House - draft 01. proposal 2024\n#preferadesign #architecture #interiordesign #preferainterior #interiordesignjakarta #arsitektur #arsitag",
    "date": "2024-02-16T09:21:03",
    "image_count": 1,
    "images": [
      "/prefera-temp/assets/projects/post_041_20240216_092103_C3ZzQckrxBr/image_01.jpg"
    ]
  },
  {
    "id": "C11NjYrr0j6",
    "folder": "post_044_20240108_074732_C11NjYrr0j6",
    "title": "Modern Linear Facade Proposal",
    "category": "Architecture & Facade",
    "featured": false,
    "status": "Completed",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "Facade Design proposal early in 2024 #preferadesign #interiordesign #interiordesignjakarta #interiorarchitecture",
    "date": "2024-01-08T07:47:32",
    "image_count": 3,
    "images": [
      "/prefera-temp/assets/projects/post_044_20240108_074732_C11NjYrr0j6/image_01.jpg",
      "/prefera-temp/assets/projects/post_044_20240108_074732_C11NjYrr0j6/image_02.jpg",
      "/prefera-temp/assets/projects/post_044_20240108_074732_C11NjYrr0j6/image_03.jpg"
    ]
  },
  {
    "id": "CzDS5HMrav3",
    "folder": "post_046_20231031_052923_CzDS5HMrav3",
    "title": "Citra Garden Exterior Transformation",
    "category": "Architecture & Facade",
    "featured": false,
    "status": "Completed , 2023",
    "builder": "In-House / Specialist",
    "photo_by": "@leowardistudio",
    "caption": "Citra Garden Residence \nFacade Design : @preferadesignstudio \nInterior Design : @thestudiobyer \nStatus : Completed , 2023 \nPhotography : @leowardistudio \n#interiordesignjakarta #interiordesign #preferadesign",
    "date": "2023-10-31T05:29:23",
    "image_count": 1,
    "images": [
      "/prefera-temp/assets/projects/post_046_20231031_052923_CzDS5HMrav3/image_01.jpg"
    ]
  },
  {
    "id": "CZ86WmCLXmg",
    "folder": "post_076_20220214_085439_CZ86WmCLXmg",
    "title": "Architectural Facade Realization",
    "category": "Architecture & Facade",
    "featured": false,
    "status": "On Going",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "RM Residence , 2021\nStatus : On Going\n#preferadesign #preferainterior #interiordesignjakarta #interiorarchitectjakarta",
    "date": "2022-02-14T08:54:39",
    "image_count": 2,
    "images": [
      "/prefera-temp/assets/projects/post_076_20220214_085439_CZ86WmCLXmg/image_01.jpg",
      "/prefera-temp/assets/projects/post_076_20220214_085439_CZ86WmCLXmg/image_02.jpg"
    ]
  },
  {
    "id": "DTz3Q-YgZZb",
    "folder": "post_012_20260122_105522_DTz3Q-YgZZb",
    "title": "Tennis Corner for Mr. KSW",
    "category": "Bespoke Space",
    "featured": true,
    "status": "Completed , 2026",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "Tennis Corner for Mr. KSW \nStatus : Completed , 2026",
    "date": "2026-01-22T10:55:22",
    "image_count": 5,
    "images": [
      "/prefera-temp/assets/projects/post_012_20260122_105522_DTz3Q-YgZZb/image_01.jpg",
      "/prefera-temp/assets/projects/post_012_20260122_105522_DTz3Q-YgZZb/image_02.jpg",
      "/prefera-temp/assets/projects/post_012_20260122_105522_DTz3Q-YgZZb/image_03.jpg",
      "/prefera-temp/assets/projects/post_012_20260122_105522_DTz3Q-YgZZb/image_04.jpg",
      "/prefera-temp/assets/projects/post_012_20260122_105522_DTz3Q-YgZZb/image_05.jpg"
    ]
  },
  {
    "id": "CtQso_nrhAh",
    "folder": "post_056_20230609_071608_CtQso_nrhAh",
    "title": "TA House Custom Joinery Details",
    "category": "Bespoke Space",
    "featured": true,
    "status": "Completed, 2023",
    "builder": "@palaisconstruction",
    "photo_by": "Prefera Archive",
    "caption": "TA House - Details.\n📍 : PIK2 \nstatus : Completed, 2023\nbuild by : @palaisconstruction \ncaptured by : @isai.studios @williamsaimin \n.\n.\n.\n.\n\n #interiordesignjakarta #preferainterior",
    "date": "2023-06-09T07:16:08",
    "image_count": 4,
    "images": [
      "/prefera-temp/assets/projects/post_056_20230609_071608_CtQso_nrhAh/image_01.jpg",
      "/prefera-temp/assets/projects/post_056_20230609_071608_CtQso_nrhAh/image_02.jpg",
      "/prefera-temp/assets/projects/post_056_20230609_071608_CtQso_nrhAh/image_03.jpg",
      "/prefera-temp/assets/projects/post_056_20230609_071608_CtQso_nrhAh/image_04.jpg"
    ]
  },
  {
    "id": "CtOTSi7LcAW",
    "folder": "post_058_20230608_085608_CtOTSi7LcAW",
    "title": "Japanese Zen Tatami Lounge",
    "category": "Bespoke Space",
    "featured": true,
    "status": "Completed",
    "builder": "In-House / Specialist",
    "photo_by": "Prefera Archive",
    "caption": "Japanese vibe never fails your home. Recalling our project back in 2021 , built by our partner in crime @palaisconstruction\n\n📸 : @isai.studios @williamsaimin",
    "date": "2023-06-08T08:56:08",
    "image_count": 3,
    "images": [
      "/prefera-temp/assets/projects/post_058_20230608_085608_CtOTSi7LcAW/image_01.jpg",
      "/prefera-temp/assets/projects/post_058_20230608_085608_CtOTSi7LcAW/image_02.jpg",
      "/prefera-temp/assets/projects/post_058_20230608_085608_CtOTSi7LcAW/image_03.jpg"
    ]
  },
  {
    "id": "DY3y13kgcu0",
    "folder": "post_004_20260528_061039_DY3y13kgcu0",
    "title": "BS House Bespoke Dining & Credenza",
    "category": "Bespoke Space",
    "featured": false,
    "status": "Completed , 2026",
    "builder": "@palaisconstruction",
    "photo_by": "@williamsaimin",
    "caption": "Project : BS House , Cosmo Park\nStatus : Completed , 2026\nBuild by : @palaisconstruction \nPhotography : @williamsaimin \n.\n.\n.\n.\n.\n.\n\n#preferadesign #preferainterior #interiordesignjakarta #interiorarchitecture #residentialdesign",
    "date": "2026-05-28T06:10:39",
    "image_count": 5,
    "images": [
      "/prefera-temp/assets/projects/post_004_20260528_061039_DY3y13kgcu0/image_01.jpg",
      "/prefera-temp/assets/projects/post_004_20260528_061039_DY3y13kgcu0/image_02.jpg",
      "/prefera-temp/assets/projects/post_004_20260528_061039_DY3y13kgcu0/image_03.jpg",
      "/prefera-temp/assets/projects/post_004_20260528_061039_DY3y13kgcu0/image_04.jpg",
      "/prefera-temp/assets/projects/post_004_20260528_061039_DY3y13kgcu0/image_05.jpg"
    ]
  },
  {
    "id": "DW55Kx2gQKV",
    "folder": "post_009_20260409_084137_DW55Kx2gQKV",
    "title": "DA House Master Suite & Custom Wardrobe",
    "category": "Bespoke Space",
    "featured": false,
    "status": "Completed , 2025",
    "builder": "@palaisconstruction",
    "photo_by": "@leowardistudio",
    "caption": "Project : DA House , New Jasmine \nStatus : Completed , 2025\nBuild by : @palaisconstruction \nPhotography : @leowardistudio \nDecorative Lights : @ardentelighting \nStyling : @100props \n.\n.\n.\n.\n.\n#preferadesign #preferainterior #interiordesignjakarta #interiorarchitecture #architecture",
    "date": "2026-04-09T08:41:37",
    "image_count": 3,
    "images": [
      "/prefera-temp/assets/projects/post_009_20260409_084137_DW55Kx2gQKV/image_01.jpg",
      "/prefera-temp/assets/projects/post_009_20260409_084137_DW55Kx2gQKV/image_02.jpg",
      "/prefera-temp/assets/projects/post_009_20260409_084137_DW55Kx2gQKV/image_03.jpg"
    ]
  },
  {
    "id": "DK1ZQZmziZ2",
    "folder": "post_020_20250613_082905_DK1ZQZmziZ2",
    "title": "YJ House Slatted Acoustic Kitchen Island",
    "category": "Bespoke Space",
    "featured": false,
    "status": "Completed , 2025",
    "builder": "@sperointerior",
    "photo_by": "Prefera Archive",
    "caption": "Project : YJ House , Sunter \nStatus : Completed , 2025\nBuild by : @sperointerior \n#preferainterior #indonesiadesigninterior #interiordesign #interiordesignjakarta #arsitag #arsilokal #japandi #moderndesign",
    "date": "2025-06-13T08:29:05",
    "image_count": 6,
    "images": [
      "/prefera-temp/assets/projects/post_020_20250613_082905_DK1ZQZmziZ2/image_01.jpg",
      "/prefera-temp/assets/projects/post_020_20250613_082905_DK1ZQZmziZ2/image_02.jpg",
      "/prefera-temp/assets/projects/post_020_20250613_082905_DK1ZQZmziZ2/image_03.jpg",
      "/prefera-temp/assets/projects/post_020_20250613_082905_DK1ZQZmziZ2/image_04.jpg",
      "/prefera-temp/assets/projects/post_020_20250613_082905_DK1ZQZmziZ2/image_05.jpg",
      "/prefera-temp/assets/projects/post_020_20250613_082905_DK1ZQZmziZ2/image_06.jpg"
    ]
  },
  {
    "id": "DXtIoOzgQlp",
    "folder": "post_006_20260429_061759_DXtIoOzgQlp",
    "title": "Cosmo Park Integrated Media Wall",
    "category": "Bespoke Space",
    "featured": false,
    "status": "Completed , 2026",
    "builder": "@palaisconstruction",
    "photo_by": "@williamsaimin",
    "caption": "Project : BS House , Cosmo Park \nStatus : Completed , 2026\nBuild by : @palaisconstruction \nPhotography : @williamsaimin \n.\n.\n.\n.\n.\n#preferadesign #preferainterior #interiordesignjakarta #interiorarchitecture",
    "date": "2026-04-29T06:17:59",
    "image_count": 6,
    "images": [
      "/prefera-temp/assets/projects/post_006_20260429_061759_DXtIoOzgQlp/image_01.jpg",
      "/prefera-temp/assets/projects/post_006_20260429_061759_DXtIoOzgQlp/image_02.jpg",
      "/prefera-temp/assets/projects/post_006_20260429_061759_DXtIoOzgQlp/image_03.jpg",
      "/prefera-temp/assets/projects/post_006_20260429_061759_DXtIoOzgQlp/image_04.jpg",
      "/prefera-temp/assets/projects/post_006_20260429_061759_DXtIoOzgQlp/image_05.jpg",
      "/prefera-temp/assets/projects/post_006_20260429_061759_DXtIoOzgQlp/image_06.jpg"
    ]
  }
];

function initProjectModal() {
  const modalOverlay = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalCloseBtn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!modalOverlay) return;

  // Open modal on card click
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId) || getCardFallbackData(card);
      openProjectModal(project);
    });
  });

  // Close handlers
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function getCardFallbackData(card) {
  return {
    title: card.querySelector('.project-title')?.innerText || 'Project',
    category: card.getAttribute('data-category') || 'Interior',
    status: 'Completed',
    builder: card.getAttribute('data-builder') || 'In-House / Specialist',
    photo_by: card.getAttribute('data-photo') || 'Prefera Archive',
    caption: card.querySelector('.project-excerpt')?.innerText || '',
    images: [card.querySelector('img')?.getAttribute('src') || '']
  };
}

function openProjectModal(project) {
  const modalOverlay = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalStatus = document.getElementById('modalStatus');
  const modalBuilder = document.getElementById('modalBuilder');
  const modalPhoto = document.getElementById('modalPhoto');
  const modalCaption = document.getElementById('modalCaption');
  const mainGalleryImg = document.getElementById('modalMainImage');
  const thumbsContainer = document.getElementById('modalThumbsRow');

  modalTitle.innerText = project.title || 'Project Detail';
  modalCategory.innerText = project.category || 'Architecture & Interior';
  modalStatus.innerText = project.status || 'Completed';
  modalBuilder.innerText = project.builder || 'In-House / Specialist';
  modalPhoto.innerText = project.photo_by || 'Prefera Archive';
  modalCaption.innerText = project.caption || 'Interior architectural realization by Prefera Design Studio.';

  // Build gallery thumbnails
  thumbsContainer.innerHTML = '';
  const images = project.images && project.images.length > 0 ? project.images : [];

  if (images.length > 0) {
    mainGalleryImg.src = images[0];

    images.forEach((imgSrc, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `modal-thumb ${idx === 0 ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${imgSrc}" alt="${project.title} view ${idx + 1}" />`;
      
      thumb.addEventListener('click', () => {
        mainGalleryImg.src = imgSrc;
        document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });

      thumbsContainer.appendChild(thumb);
    });
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 5. Contact Form Simulation & WhatsApp Dispatch (087884156045)
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  const WA_NUMBER = "6287884156045"; // 087884156045

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value;
    const projectType = document.getElementById('formType').value;
    const location = document.getElementById('formLocation').value;
    const message = document.getElementById('formMessage').value;

    const waText = encodeURIComponent(
      `Hello Prefera Design Studio,\n\n` +
      `My name is ${name}.\n` +
      `I would like to consult regarding a ${projectType} project.\n` +
      `Location & Target Date: ${location || 'Not specified'}\n\n` +
      `Project Brief:\n${message}`
    );

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${waText}`;

    const confirmed = confirm(
      `Thank you, ${name}! Would you like to send this inquiry directly to Prefera Design Studio via WhatsApp (0878-8415-6045)?`
    );

    if (confirmed) {
      window.open(waUrl, '_blank');
    } else {
      alert('Thank you! Your inquiry has been recorded. Prefera Design Studio will be in touch shortly.');
      form.reset();
    }
  });
}

// 6. Mobile Navigation Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      if (navMenu.classList.contains('mobile-open')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    }
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    });
  });
}
