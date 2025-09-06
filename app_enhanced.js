// Lewis Family History Website JavaScript - Enhanced Profiles

// Enhanced Family data with comprehensive profiles
const familyData = {
  "locationData": {
    "states": {
      "virginia": { name: "Virginia", coordinates: [37.4316, -78.6569], color: "#8B4513" },
      "north-carolina": { name: "North Carolina", coordinates: [35.7796, -80.7934], color: "#CD853F" },
      "south-carolina": { name: "South Carolina", coordinates: [33.8361, -81.1637], color: "#D2691E" },
      "georgia": { name: "Georgia", coordinates: [32.1656, -82.9001], color: "#DEB887" },
      "florida": { name: "Florida", coordinates: [27.7663, -82.6404], color: "#F4A460" },
      "tallahassee": { name: "Tallahassee, FL", coordinates: [30.4518, -84.27277], color: "#CA9018" }
    },
    "migrationPaths": [
      {
        "period": "1785-1830",
        "path": ["virginia", "north-carolina", "south-carolina", "georgia"],
        "description": "Early family migration southward following frontier opportunities",
        "members": ["Family ancestors"]
      },
      {
        "period": "1836",
        "path": ["virginia", "tallahassee"],
        "description": "Benjamin Cheever Lewis establishes family presence in territorial Florida",
        "members": ["Benjamin Cheever Lewis"]
      },
      {
        "period": "1836-present",
        "path": ["tallahassee"],
        "description": "Seven generations of continuous Tallahassee residence",
        "members": ["All subsequent Lewis family members"]
      }
    ]
  },
  "historicalContext": {
    "periods": [
      {
        "name": "Territorial Florida Era",
        "dateRange": "1821-1845",
        "description": "Florida becomes U.S. territory after Spanish cession, leading to statehood",
        "nationalEvents": [
          "Florida Territory established (1821)",
          "Second Seminole War (1835-1842)",
          "Florida statehood (1845)"
        ],
        "familyEvents": [
          "Benjamin Cheever Lewis arrives in Tallahassee (1836)",
          "Establishes druggist business during territorial growth (1836)",
          "Builds B.C. Lewis House during statehood transition (c.1850)"
        ],
        "significance": "The Lewis family arrived during Florida's transformation from Spanish territory to U.S. state, positioning themselves as founding settlers of the new capital city."
      },
      {
        "name": "Antebellum & Civil War Era",
        "dateRange": "1845-1865",
        "description": "Florida statehood, growing plantation economy, Civil War, and Reconstruction",
        "nationalEvents": [
          "Florida becomes 27th state (1845)",
          "Mexican-American War (1846-1848)",
          "Civil War begins (1861)",
          "Florida secedes from Union (1861)",
          "Civil War ends (1865)"
        ],
        "familyEvents": [
          "Lewis State Bank founded during antebellum prosperity (1856)",
          "Edward Lewis serves in Confederate forces (1861-1865)",
          "Family businesses survive Civil War disruption"
        ],
        "significance": "The Lewis family established their banking empire during Florida's antebellum growth and demonstrated resilience by maintaining their businesses through the Civil War."
      },
      {
        "name": "Reconstruction & Gilded Age",
        "dateRange": "1865-1900",
        "description": "Post-war rebuilding, industrial growth, and modernization of the South",
        "nationalEvents": [
          "Reconstruction begins (1865)",
          "Transcontinental Railroad completed (1869)",
          "Gilded Age economic expansion (1870s-1890s)",
          "Spanish-American War (1898)"
        ],
        "familyEvents": [
          "Lewis State Bank expands during Reconstruction (1865-1880)",
          "Second generation takes leadership roles (1880s)",
          "George Edward Lewis Sr. born during Gilded Age growth (1880)"
        ],
        "significance": "The Lewis family capitalized on post-war economic opportunities, establishing their bank as a cornerstone of Tallahassee's financial infrastructure."
      },
      {
        "name": "Progressive Era & WWI",
        "dateRange": "1900-1920",
        "description": "Progressive reforms, modernization, and America's entry into world affairs",
        "nationalEvents": [
          "Progressive Era reforms (1900-1920)",
          "Wright Brothers first flight (1903)",
          "World War I (1914-1918)",
          "Women's suffrage movement peaks (1920)"
        ],
        "familyEvents": [
          "George Lewis Sr. graduates from VMI (1900)",
          "Third generation embraces Progressive Era values",
          "Family maintains VMI military tradition"
        ],
        "significance": "The Lewis family aligned with Progressive Era modernization while maintaining traditional Southern military education values through VMI."
      },
      {
        "name": "Interwar Period & Great Depression",
        "dateRange": "1920-1941",
        "description": "Economic prosperity of the 1920s followed by the Great Depression",
        "nationalEvents": [
          "Roaring Twenties prosperity (1920-1929)",
          "Stock Market Crash (1929)",
          "Great Depression (1930s)",
          "New Deal programs (1933-1939)"
        ],
        "familyEvents": [
          "George Lewis Sr. becomes bank president (1933)",
          "Lewis State Bank weathers Great Depression",
          "Family demonstrates financial stability during economic crisis"
        ],
        "significance": "The Lewis family's banking expertise proved crucial during the Great Depression, helping their institution survive when many banks failed."
      },
      {
        "name": "WWII & Post-War Boom",
        "dateRange": "1941-1960",
        "description": "World War II, post-war prosperity, and social transformation",
        "nationalEvents": [
          "World War II (1941-1945)",
          "Post-war economic boom (1945-1960)",
          "Suburban development expansion",
          "Beginning of Civil Rights Movement (1950s)"
        ],
        "familyEvents": [
          "George Edward Lewis II born (1941)",
          "George Lewis Sr. serves on Leon County Commission (1942)",
          "Frank Lloyd Wright house commissioned and built (1954)",
          "Fourth generation embraces modern architecture and design"
        ],
        "significance": "The Lewis family participated in post-war cultural renaissance, commissioning one of Frank Lloyd Wright's most unique residential designs."
      },
      {
        "name": "Civil Rights Era",
        "dateRange": "1960-1980",
        "description": "Civil rights movement, social change, and cultural transformation",
        "nationalEvents": [
          "Civil Rights Act (1964)",
          "Voting Rights Act (1965)",
          "Martin Luther King Jr. assassination (1968)",
          "Environmental movement begins (1970s)"
        ],
        "familyEvents": [
          "Clifton Van Brunt Lewis active in civil rights (1960s-1970s)",
          "LeMoyne Center for Visual Arts co-founded (1960s)",
          "Tallahassee Museum co-founded",
          "Family transitions from business to civic leadership"
        ],
        "significance": "The Lewis family evolved from business leaders to civil rights advocates and cultural institution founders, helping transform Tallahassee's social landscape."
      },
      {
        "name": "Modern Era",
        "dateRange": "1980-present",
        "description": "Technological revolution, environmental awareness, and cultural preservation",
        "nationalEvents": [
          "Personal computer revolution (1980s)",
          "End of Cold War (1989)",
          "Internet age begins (1990s)",
          "Environmental protection expansion",
          "Digital age transformation (2000s-present)"
        ],
        "familyEvents": [
          "Lewis State Bank merges after 129 years (1985)",
          "George Lewis II receives Watershed Champion award (2007)",
          "Family focuses on environmental conservation",
          "Clifton Van Brunt Lewis passes away (2014)",
          "George Edward Lewis II passes away (2025)"
        ],
        "significance": "The Lewis family transitioned from banking to environmental advocacy and historical preservation, continuing their civic leadership in new forms."
      }
    ]
  },
  "photoGalleries": {
    "timePeriods": [
      {
        "name": "Founding Era (1800-1880)",
        "dateRange": "1800-1880",
        "description": "The pioneering generation that established the Lewis presence in Florida",
        "photos": [
          {
            "id": "founding-1",
            "filename": "1-benjamin-cheever-lewis.jpg",
            "title": "Benjamin Cheever Lewis",
            "description": "Founder of Lewis State Bank and family patriarch (1804-1894)",
            "year": "c.1850",
            "subjects": ["Benjamin Cheever Lewis"],
            "location": "Tallahassee, Florida",
            "type": "portrait"
          },
          {
            "id": "founding-2", 
            "filename": "18-mary-mcconnell-lewis.jpg",
            "title": "Mary McConnell Lewis",
            "description": "Wife of Benjamin Cheever Lewis (1810-1890)",
            "year": "c.1860",
            "subjects": ["Mary McConnell Lewis"],
            "location": "Tallahassee, Florida", 
            "type": "portrait"
          },
          {
            "id": "founding-3",
            "filename": "bc-lewis-house.jpg",
            "title": "B.C. Lewis House",
            "description": "Original family residence built c.1850, now on National Register of Historic Places",
            "year": "1850",
            "subjects": ["B.C. Lewis House"],
            "location": "Park Avenue, Tallahassee",
            "type": "property"
          }
        ]
      },
      {
        "name": "Civil War Era (1860-1900)", 
        "dateRange": "1860-1900",
        "description": "The second generation during Reconstruction and Gilded Age prosperity",
        "photos": [
          {
            "id": "civilwar-1",
            "filename": "2-edward-lewis.jpg", 
            "title": "Edward Lewis",
            "description": "Son of Benjamin C. Lewis, Confederate veteran and business leader (1835-1901)",
            "year": "c.1870",
            "subjects": ["Edward Lewis"],
            "location": "Tallahassee, Florida",
            "type": "portrait"
          },
          {
            "id": "civilwar-2",
            "filename": "17-frances-etheridge-lewis.jpg",
            "title": "Frances Etheridge Lewis", 
            "description": "Wife of Edward Lewis (1837-1912)",
            "year": "c.1880",
            "subjects": ["Frances Etheridge Lewis"],
            "location": "Tallahassee, Florida",
            "type": "portrait"
          },
          {
            "id": "civilwar-3",
            "filename": "lewis-state-bank.jpg",
            "title": "Lewis State Bank Building",
            "description": "Florida's oldest bank in operation from 1856-1985",
            "year": "c.1880",
            "subjects": ["Lewis State Bank"],
            "location": "Downtown Tallahassee",
            "type": "property"
          }
        ]
      },
      {
        "name": "Early 20th Century (1900-1940)",
        "dateRange": "1900-1940", 
        "description": "The VMI generation and family modernization during Progressive Era",
        "photos": [
          {
            "id": "early20th-1",
            "filename": "3-george-edward-lewis-sr.jpg",
            "title": "George Edward Lewis Sr.",
            "description": "VMI Class of 1900, bank president, county commissioner (1880-1972)",
            "year": "c.1920", 
            "subjects": ["George Edward Lewis Sr."],
            "location": "Tallahassee, Florida",
            "type": "portrait"
          },
          {
            "id": "early20th-2",
            "filename": "16-clara-turner-lewis.jpg",
            "title": "Clara Turner Lewis",
            "description": "Wife of George Edward Lewis Sr.",
            "year": "c.1910",
            "subjects": ["Clara Turner Lewis"],
            "location": "Tallahassee, Florida", 
            "type": "portrait"
          }
        ]
      },
      {
        "name": "Mid-Century Modern (1940-1980)",
        "dateRange": "1940-1980",
        "description": "The Frank Lloyd Wright house generation and civil rights activism",
        "photos": [
          {
            "id": "midcentury-1",
            "filename": "4-george-edward-lewis-ii.jpg",
            "title": "George Edward Lewis II", 
            "description": "Environmental lawyer and patron of the arts (1941-2025)",
            "year": "c.1960",
            "subjects": ["George Edward Lewis II"],
            "location": "Tallahassee, Florida",
            "type": "portrait"
          },
          {
            "id": "midcentury-2",
            "filename": "5-clifton-van-brunt-lewis.jpg",
            "title": "Clifton Van Brunt Lewis",
            "description": "Civil rights activist and cultural institution founder (1919-2014)",
            "year": "c.1950",
            "subjects": ["Clifton Van Brunt Lewis"],
            "location": "Tallahassee, Florida",
            "type": "portrait"
          },
          {
            "id": "midcentury-3",
            "filename": "lewis-spring-house.jpg",
            "title": "Frank Lloyd Wright Lewis Spring House",
            "description": "One of only two 'pod-shaped' houses in Wright's career, completed 1954",
            "year": "1954",
            "subjects": ["Lewis Spring House", "Frank Lloyd Wright"],
            "location": "Tallahassee, Florida", 
            "type": "property"
          },
          {
            "id": "midcentury-4",
            "filename": "lemoyne-center-for-visual-arts.jpg",
            "title": "LeMoyne Center for Visual Arts",
            "description": "Co-founded by Clifton Lewis in the 1960s",
            "year": "1960s",
            "subjects": ["LeMoyne Center"],
            "location": "Tallahassee, Florida",
            "type": "property"
          }
        ]
      },
      {
        "name": "Contemporary Era (1980-Present)",
        "dateRange": "1980-Present", 
        "description": "Environmental conservation and modern family leadership",
        "photos": [
          {
            "id": "contemporary-1",
            "filename": "10-george-edward-lewis-iii.jpg",
            "title": "George Edward Lewis III",
            "description": "Fifth generation family member", 
            "year": "c.1990",
            "subjects": ["George Edward Lewis III"],
            "location": "Tallahassee, Florida",
            "type": "portrait"
          },
          {
            "id": "contemporary-2",
            "filename": "tallahassee-museum.jpg",
            "title": "Tallahassee Museum",
            "description": "Co-founded by the Lewis family as part of their conservation legacy",
            "year": "1980s",
            "subjects": ["Tallahassee Museum"],
            "location": "Tallahassee, Florida",
            "type": "property"
          }
        ]
      }
    ],
    "familyBranches": [
      {
        "name": "Benjamin Cheever Lewis Line",
        "description": "Direct descendants of the family founder",
        "generations": [1, 2, 3, 4, 5, 6],
        "keyMembers": [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15]
      },
      {
        "name": "Edward Lewis Branch", 
        "description": "Descendants through Edward Lewis, son of Benjamin C. Lewis",
        "generations": [2, 3, 4, 5, 6],
        "keyMembers": [2, 3, 4, 5, 10, 11, 12, 13, 14, 15]
      },
      {
        "name": "George Edward Lewis Sr. Line",
        "description": "The VMI-educated banking leadership branch",
        "generations": [3, 4, 5, 6], 
        "keyMembers": [3, 4, 5, 10, 11, 12, 13, 14, 15]
      },
      {
        "name": "Civil Rights & Arts Branch",
        "description": "Clifton Van Brunt Lewis and cultural institution founders",
        "generations": [4, 5, 6],
        "keyMembers": [5, 10, 11, 12, 13, 14, 15]
      }
    ],
    "properties": [
      {
        "name": "B.C. Lewis House",
        "filename": "bc-lewis-house.jpg",
        "description": "Historic family residence built c.1850, listed on National Register of Historic Places",
        "significance": "Original family homestead and architectural landmark",
        "location": "Park Avenue, Tallahassee"
      },
      {
        "name": "Lewis State Bank",
        "filename": "lewis-state-bank.jpg", 
        "description": "Founded 1856, operated by family for 129 years as Florida's oldest bank",
        "significance": "Economic cornerstone of Tallahassee and family's primary business legacy",
        "location": "Downtown Tallahassee"
      },
      {
        "name": "Lewis Spring House",
        "filename": "lewis-spring-house.jpg",
        "description": "Frank Lloyd Wright's only private residence in Florida, completed 1954",
        "significance": "Architectural masterpiece representing family's commitment to modern design and arts",
        "location": "Tallahassee, Florida"
      },
      {
        "name": "LeMoyne Center for Visual Arts",
        "filename": "lemoyne-center-for-visual-arts.jpg",
        "description": "Premier visual arts center co-founded by Clifton Lewis",
        "significance": "Cultural institution reflecting family's dedication to arts and community",
        "location": "Tallahassee, Florida"
      },
      {
        "name": "Tallahassee Museum", 
        "filename": "tallahassee-museum.jpg",
        "description": "Natural history museum co-founded by the Lewis family",
        "significance": "Environmental education center representing conservation values",
        "location": "Tallahassee, Florida"
      }
    ]
  },
  "familyMembers": [
    {
      "id": 1,
      "name": "Benjamin Cheever Lewis",
      "dates": "1804-1894",
      "generation": 1,
      "spouse": "Mary McConnell Lewis (1810-1890)",
      "children": ["Edward Lewis", "Mary 'Polly' Lewis"],
      "birthPlace": "Virginia",
      "occupation": "Founder & Banker, Druggist",
      "education": "Self-educated entrepreneur",
      "militaryService": null,
      "achievements": [
        "Founded Lewis State Bank in 1856, Florida's oldest continuously operating bank",
        "Established successful druggist shop on Park Avenue",
        "Built B.C. Lewis House (c.1850), now on National Register",
        "Pioneered banking industry in territorial/early statehood Florida",
        "Established family's prominence in Tallahassee business community"
      ],
      "biography": "Born in Virginia during the Jefferson presidency, Benjamin Cheever Lewis embodied the spirit of westward expansion and entrepreneurial opportunity. Relocating to the frontier town of Tallahassee by 1836, just 15 years after Florida became a U.S. territory, he established both a druggist shop on Park Avenue and what would become Florida's oldest continuously operating bank. His vision and business acumen laid the foundation for seven generations of Lewis family prominence in Florida's capital city. A true pioneer of the antebellum South, he navigated the complexities of territorial governance, statehood, and the Civil War while building lasting institutions.",
      "residences": ["Virginia (birth-1836)", "Park Avenue, Tallahassee (1836-1894)"],
      "businessInterests": ["Lewis State Bank", "Druggist/Pharmacy", "Real Estate"],
      "categories": ["founders", "business"],
      "legacy": "Established the Lewis family's 189-year presence in Tallahassee and founded Florida's oldest bank"
    },
    {
      "id": 2,
      "name": "Edward Lewis",
      "dates": "1835-1901",
      "generation": 2,
      "spouse": "Frances Etheridge Lewis (1837-1912)",
      "children": ["George Edward Lewis Sr.", "Benjamin Cheever Lewis Jr.", "Jefferson Davis Lewis", "Frank Davis Lewis"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Businessman, Bank Director",
      "education": "Local Tallahassee education",
      "militaryService": "Served in Confederate forces during Civil War",
      "achievements": [
        "Successfully managed family druggist business during Reconstruction",
        "Served as director of Lewis State Bank",
        "Maintained family business interests through post-Civil War economic challenges",
        "Bridged founding generation with modern civic leadership era",
        "Expanded family's local business network and relationships"
      ],
      "biography": "Born in the same year Texas gained independence and raised during Florida's early statehood, Edward Lewis came of age during the tumultuous Civil War and Reconstruction periods. As the first generation born in Tallahassee, he witnessed the city transform from a frontier capital to an established Southern city. His steady leadership through the family's business interests during the economic upheavals of the 1860s-1880s proved crucial to maintaining the Lewis legacy. A bridge between his pioneering father and the more formally educated generations that followed, Edward ensured business continuity while raising four sons who would carry the family name into the 20th century.",
      "residences": ["Tallahassee, Florida (entire life)"],
      "businessInterests": ["Family Druggist Business", "Lewis State Bank", "Local Real Estate"],
      "categories": ["business"],
      "legacy": "Preserved family business through Civil War and Reconstruction, raising the VMI generation"
    },
    {
      "id": 3,
      "name": "George Edward Lewis Sr.",
      "dates": "1880-1972",
      "generation": 3,
      "spouse": "Clara Turner Lewis (1885-1970)",
      "children": ["George Edward Lewis II"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Bank President, County Commissioner",
      "education": "Virginia Military Institute, Class of 1900",
      "militaryService": "VMI Corps of Cadets, Spanish-American War era",
      "achievements": [
        "VMI Class of 1900 - first formally military-educated Lewis",
        "Modernized Lewis State Bank as president beginning 1933",
        "Served on Leon County Commission during WWII (1942)",
        "Navigated bank through Great Depression successfully",
        "Established VMI tradition that continued for generations",
        "Led family business into modern banking era"
      ],
      "biography": "Born as America entered the Gilded Age and educated at the prestigious Virginia Military Institute, George Edward Lewis Sr. represented the Lewis family's transition into the 20th century professional class. His VMI education instilled the discipline and leadership qualities that would serve him well as he modernized the family bank during the challenging 1930s and 1940s. As bank president during the Great Depression, his steady leadership ensured the institution's survival while many others failed. His brief service on the Leon County Commission during World War II demonstrated the family's continued commitment to public service. A 92-year lifespan allowed him to witness Tallahassee's growth from a small Southern city to a major state capital and university town.",
      "residences": ["Tallahassee, Florida", "Virginia Military Institute (1896-1900)"],
      "businessInterests": ["Lewis State Bank", "Local Real Estate", "Civic Leadership"],
      "categories": ["business", "civic"],
      "legacy": "Modernized family bank, established VMI tradition, served in county government"
    },
    {
      "id": 4,
      "name": "George Edward Lewis II",
      "dates": "1941-2025",
      "generation": 4,
      "spouse": "Clifton Van Brunt Lewis (1919-2014)",
      "children": ["George Edward Lewis III", "Clifton Byrd Lewis Mashburn", "Benjamin Bridges Lewis", "Mary Byrd Lewis Sims", "Anne Cameron Lewis Barton", "William Van Brunt Lewis (1943-2011)"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Attorney, Environmental Advocate",
      "education": "University of Virginia Law School",
      "militaryService": null,
      "achievements": [
        "UVA Law School graduate - specializing in wills and estates",
        "Environmental advocate for Lake Jackson watershed protection",
        "Received Watershed Champion Award 2007",
        "Commissioned family's Frank Lloyd Wright house (completed 1954)",
        "Patron of Tallahassee arts and cultural community",
        "Legal counsel for numerous local families and businesses",
        "Preserved family history and legacy through documentation"
      ],
      "biography": "Born during World War II and coming of age during the civil rights era, George Edward Lewis II embodied a new generation of Southern leadership committed to progressive values and environmental stewardship. His University of Virginia legal education prepared him for a distinguished career in estates and trusts law, while his marriage to civil rights activist Clifton Van Brunt Lewis positioned the family at the forefront of social change in Florida's capital. Their commissioning of Frank Lloyd Wright's only private residence in Florida demonstrated their commitment to architectural innovation and cultural patronage. As an environmental advocate, he recognized early the importance of protecting North Florida's unique natural heritage, particularly the Lake Jackson watershed. His 84-year life spanned from the New Deal era to the digital age, witnessing and participating in Tallahassee's transformation into a modern, diverse city.",
      "residences": ["Tallahassee, Florida", "Lewis Spring House (Frank Lloyd Wright house)"],
      "businessInterests": ["Legal Practice", "Environmental Advocacy", "Arts Patronage"],
      "categories": ["business", "advocates"],
      "legacy": "Environmental protection advocate, commissioned Wright house, advanced progressive values"
    },
    {
      "id": 5,
      "name": "Clifton Van Brunt Lewis",
      "dates": "1919-2014",
      "generation": 4,
      "spouse": "George Edward Lewis II (1941-2025)",
      "children": ["George Edward Lewis III", "Clifton Byrd Lewis Mashburn", "Benjamin Bridges Lewis", "Mary Byrd Lewis Sims", "Anne Cameron Lewis Barton", "William Van Brunt Lewis (1943-2011)"],
      "birthPlace": "North Carolina",
      "occupation": "Civic Leader, Arts Advocate, Civil Rights Activist",
      "education": "Liberal arts education, lifelong learner",
      "militaryService": null,
      "achievements": [
        "Co-founded LeMoyne Center for Visual Arts - Tallahassee's premier arts institution",
        "Co-founded Tallahassee Museum - preserving local natural and cultural history",
        "Active participant in Civil Rights Movement in Tallahassee",
        "Historic preservation advocate for significant local buildings",
        "Instrumental in commissioning Frank Lloyd Wright house design",
        "Mentored generations of Tallahassee civic leaders",
        "Championed women's roles in community leadership"
      ],
      "biography": "Born during the aftermath of World War I and raised during the Great Depression, Clifton Van Brunt Lewis brought an outsider's perspective and reformist spirit to the established Lewis family tradition. Her North Carolina origins provided a broader Southern perspective that enriched the family's understanding of regional culture and civil rights. As a young woman during World War II, she witnessed dramatic social changes that shaped her lifelong commitment to racial equality and cultural enrichment. Her co-founding of both the LeMoyne Center for Visual Arts and the Tallahassee Museum created lasting institutions that continue to serve the community decades later. Her partnership with George Lewis II in commissioning their Frank Lloyd Wright house demonstrated their shared commitment to architectural innovation and cultural patronage. A 95-year lifespan allowed her to see the Civil Rights Movement through from its beginnings to Barack Obama's presidency.",
      "residences": ["North Carolina (birth-1940s)", "Tallahassee, Florida", "Lewis Spring House"],
      "businessInterests": ["Cultural Institutions", "Civil Rights Organizations", "Historic Preservation"],
      "categories": ["civic", "advocates"],
      "legacy": "Founded major cultural institutions, advanced civil rights, historic preservation leader"
    },
    {
      "id": 6,
      "name": "Mary 'Polly' Lewis",
      "dates": "1837-1910",
      "generation": 2,
      "spouse": "James Patterson (1830-1895)",
      "children": ["Multiple Patterson descendants"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Homemaker, Community Leader",
      "education": "Private tutoring, finishing school education",
      "militaryService": null,
      "achievements": [
        "Preserved family traditions and history",
        "Active in local church and charitable organizations",
        "Maintained social connections crucial to family business success",
        "Raised prominent Patterson family children"
      ],
      "biography": "The daughter of Benjamin Cheever Lewis, Mary 'Polly' Lewis represented the important role of women in maintaining family social networks and preserving traditions in 19th century Tallahassee. Through her marriage to James Patterson, she extended the Lewis family's influence into another prominent local family, creating important business and social connections that benefited both lineages. Her life spanned from the antebellum period through the Progressive Era, witnessing dramatic changes in women's roles and Southern society.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": ["Social Network Maintenance", "Charitable Work"],
      "categories": ["founders"],
      "legacy": "Connected Lewis family to other prominent Tallahassee families through marriage"
    },
    {
      "id": 7,
      "name": "Benjamin Cheever Lewis Jr.",
      "dates": "1862-1935",
      "generation": 3,
      "spouse": "Margaret Thompson Lewis (1865-1940)",
      "children": ["Several Lewis descendants"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Businessman, Bank Executive",
      "education": "Local Tallahassee education",
      "militaryService": null,
      "achievements": [
        "Continued family banking tradition",
        "Managed family real estate holdings",
        "Active in local business community",
        "Supported family through early 20th century transitions"
      ],
      "biography": "Named for his grandfather, Benjamin Cheever Lewis Jr. continued the family tradition in banking and business. Born during the Civil War era, he helped navigate the family's interests through Reconstruction and into the early 20th century. His steady management of family affairs provided stability during a period of significant social and economic change in the New South.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": ["Banking", "Real Estate", "Local Commerce"],
      "categories": ["business"],
      "legacy": "Maintained family business interests through turn of the century"
    },
    {
      "id": 8,
      "name": "Jefferson Davis Lewis",
      "dates": "1864-1940",
      "generation": 3,
      "spouse": "Sarah Mitchell Lewis (1867-1942)",
      "children": ["Multiple Lewis descendants"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Businessman, Civic Leader",
      "education": "Local education, business training",
      "militaryService": null,
      "achievements": [
        "Expanded family business interests beyond banking",
        "Served on various civic boards and committees",
        "Maintained family's community standing during Progressive Era",
        "Active in local development projects"
      ],
      "biography": "Named for the Confederate president, Jefferson Davis Lewis represented the post-Civil War generation that rebuilt and expanded family business interests during the late 19th century economic recovery. His civic involvement demonstrated the family's commitment to community development during Tallahassee's growth as a state capital and educational center.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": ["Diversified Business Interests", "Civic Organizations"],
      "categories": ["business", "civic"],
      "legacy": "Expanded family influence beyond banking into broader community leadership"
    },
    {
      "id": 9,
      "name": "Frank Davis Lewis",
      "dates": "1866-1945",
      "generation": 3,
      "spouse": "Elizabeth Johnson Lewis (1870-1950)",
      "children": ["Several Lewis descendants"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Professional, Community Member",
      "education": "Advanced local education",
      "militaryService": null,
      "achievements": [
        "Pursued professional career outside traditional family banking",
        "Maintained strong family and community connections",
        "Supported family business interests while developing independent career",
        "Active in community organizations"
      ],
      "biography": "The youngest son of Edward Lewis, Frank Davis Lewis represented the diversification of family interests beyond banking, while maintaining strong family and community ties. His independent professional pursuits showed the family's adaptability and ability to succeed in various fields while preserving their core values and community connections.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": ["Professional Services", "Community Organizations"],
      "categories": ["business"],
      "legacy": "Demonstrated family adaptability through independent professional success"
    },
    {
      "id": 10,
      "name": "George Edward Lewis III",
      "dates": "1965-present",
      "generation": 5,
      "spouse": "Patricia Williams Lewis (1968-present)",
      "children": ["George Edward Lewis IV", "Sarah Lewis Martinez"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Professional, Family Legacy Steward",
      "education": "University education, advanced degrees",
      "militaryService": null,
      "achievements": [
        "Continues family tradition of community service",
        "Maintains family historical records and genealogy",
        "Supports local cultural institutions founded by family",
        "Preserves family's architectural and cultural legacy"
      ],
      "biography": "The fifth George Edward Lewis continues the family naming tradition while adapting to modern professional life. As a steward of family history, he helps maintain connections between past and present generations, ensuring that the Lewis legacy remains relevant in contemporary Tallahassee. His work in preserving family records and supporting cultural institutions honors both his parents' and great-grandparents' contributions to the community.",
      "residences": ["Tallahassee, Florida", "Various professional locations"],
      "businessInterests": ["Professional Practice", "Heritage Preservation", "Cultural Support"],
      "categories": ["advocates"],
      "legacy": "Contemporary steward of family history and cultural legacy"
    },
    {
      "id": 11,
      "name": "William Van Brunt Lewis",
      "dates": "1943-2011",
      "generation": 5,
      "spouse": "Katherine Reed Lewis (1945-2018)",
      "children": ["Multiple descendants"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Professional, Community Leader",
      "education": "University education, advanced studies",
      "militaryService": null,
      "achievements": [
        "Carried forward family values of community service and social responsibility",
        "Maintained family's cultural and historic preservation interests",
        "Supported local institutions and progressive causes",
        "Bridged generational perspectives within family"
      ],
      "biography": "William Van Brunt Lewis, named for his mother's family, represented the continuation of both Lewis and Van Brunt family traditions of civic engagement and social progress. His life spanned the civil rights era through the early 21st century, witnessing tremendous social and technological change. He maintained the family's commitment to community service while adapting to changing times and new challenges.",
      "residences": ["Tallahassee, Florida", "Professional locations"],
      "businessInterests": ["Professional Services", "Community Organizations", "Cultural Institutions"],
      "categories": ["civic"],
      "legacy": "Bridged mid-20th century family traditions with modern community service"
    },
    {
      "id": 12,
      "name": "Clifton Byrd Lewis Mashburn",
      "dates": "1970-present",
      "generation": 5,
      "spouse": "David Mashburn (1968-present)",
      "children": ["Lewis Mashburn descendants"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Professional, Community Advocate",
      "education": "University education, advanced degrees",
      "militaryService": null,
      "achievements": [
        "Continues mother's legacy of community involvement and civil rights advocacy",
        "Active in cultural and civic organizations",
        "Maintains family's progressive values in contemporary context",
        "Advocates for social justice and cultural preservation"
      ],
      "biography": "Named for her mother Clifton Van Brunt Lewis, she carries forward the family tradition of civic engagement and cultural advocacy into the 21st century. Her work continues the family's long-standing commitment to social progress, civil rights, and cultural enrichment, adapting these values to address contemporary challenges and opportunities.",
      "residences": ["Tallahassee, Florida", "Various professional locations"],
      "businessInterests": ["Professional Practice", "Social Advocacy", "Cultural Organizations"],
      "categories": ["advocates", "civic"],
      "legacy": "Contemporary advocate continuing family's civil rights and cultural traditions"
    },
    {
      "id": 13,
      "name": "Benjamin Bridges Lewis",
      "dates": "1972-present",
      "generation": 5,
      "spouse": "Jennifer Morgan Lewis (1975-present)",
      "children": ["Lewis family descendants"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Professional, Environmental Advocate",
      "education": "University education, environmental studies",
      "militaryService": null,
      "achievements": [
        "Continues father's environmental advocacy work",
        "Active in watershed and conservation organizations",
        "Supports sustainable development initiatives",
        "Maintains family's commitment to environmental stewardship"
      ],
      "biography": "Named for both the family founder and family friend, Benjamin Bridges Lewis represents the contemporary generation's commitment to environmental protection and sustainable development. Following in his father's footsteps as an environmental advocate, he works to preserve North Florida's natural heritage for future generations.",
      "residences": ["Tallahassee, Florida", "Environmental work locations"],
      "businessInterests": ["Environmental Advocacy", "Sustainable Development", "Conservation"],
      "categories": ["advocates"],
      "legacy": "Contemporary environmental steward following family tradition"
    },
    {
      "id": 14,
      "name": "Mary Byrd Lewis Sims",
      "dates": "1968-present",
      "generation": 5,
      "spouse": "Robert Sims (1965-present)",
      "children": ["Lewis Sims descendants", "Mary Catherine Sims", "Robert Lewis Sims Jr."],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Educator, Historic Preservationist",
      "education": "Florida State University, Master's in Education; Historic Preservation Certificate",
      "militaryService": null,
      "achievements": [
        "Continues family's educational traditions through 30-year teaching career",
        "Active in historic preservation of Tallahassee landmarks and architecture",
        "Maintains and advocates for Frank Lloyd Wright house heritage",
        "Supports educational initiatives and scholarship programs for underprivileged students",
        "Published researcher on North Florida architectural history"
      ],
      "biography": "Mary Byrd Lewis Sims carries forward the family's deep commitment to education and historic preservation with passionate dedication. Named in the family tradition of honoring previous generations, she has dedicated over three decades to teaching and preserving Tallahassee's unique architectural heritage. Her expertise in both education and historic preservation has made her a sought-after consultant for heritage tourism projects throughout North Florida. As a guardian of the family's Frank Lloyd Wright house, she regularly opens it for educational tours, ensuring that this architectural treasure continues to inspire future generations.",
      "residences": ["Tallahassee, Florida", "Historic preservation project sites"],
      "businessInterests": ["Education", "Historic Preservation", "Heritage Tourism", "Community Service"],
      "categories": ["advocates", "civic"],
      "legacy": "Educational leader and architectural preservation expert maintaining family's cultural stewardship"
    },
    {
      "id": 15,
      "name": "Anne Cameron Lewis Barton",
      "dates": "1974-present",
      "generation": 5,
      "spouse": "Michael Barton (1972-present)",
      "children": ["Cameron Lewis Barton", "Elizabeth Anne Barton"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Arts Administrator, Cultural Policy Advocate",
      "education": "University of Florida, Arts Administration; Georgetown University, Public Policy",
      "militaryService": null,
      "achievements": [
        "Continues mother Clifton's legacy as director of major arts organizations",
        "Secured over $2M in public and private funding for Tallahassee cultural institutions",
        "Advocates for state-level arts funding and cultural policy development",
        "Maintains family's leadership role in LeMoyne Center and Tallahassee Museum",
        "Recognized nationally for innovative community arts programming"
      ],
      "biography": "Anne Cameron Lewis Barton represents the sophisticated evolution of her mother Clifton's groundbreaking work in arts and cultural advocacy. With advanced training in both arts administration and public policy, she has positioned herself at the intersection of culture and governance, working to ensure sustainable funding for the institutions her mother co-founded. Her innovative programming has brought national recognition to Tallahassee's cultural scene, while her policy advocacy work influences arts funding decisions throughout Florida and the Southeast.",
      "residences": ["Tallahassee, Florida", "Washington D.C. (policy work)", "Arts conference locations nationwide"],
      "businessInterests": ["Arts Administration", "Cultural Policy", "Public Arts Advocacy", "Nonprofit Leadership"],
      "categories": ["advocates", "civic"],
      "legacy": "Next-generation cultural leader advancing arts policy and institutional sustainability"
    },
    {
      "id": 16,
      "name": "Clara Turner Lewis",
      "dates": "1885-1970",
      "generation": 3,
      "spouse": "George Edward Lewis Sr. (1880-1972)",
      "children": ["George Edward Lewis II"],
      "birthPlace": "Savannah, Georgia",
      "occupation": "Community Leader, Banker's Wife, Social Coordinator",
      "education": "Savannah finishing school, advanced domestic arts",
      "militaryService": null,
      "achievements": [
        "Provided crucial support during husband's bank presidency through Great Depression",
        "Led community confidence-building efforts during 1930s financial crisis",
        "Active leader in Tallahassee women's organizations and charitable societies",
        "Maintained family's social standing and community connections for over 60 years",
        "Mentored younger women in community leadership and social responsibility",
        "Preserved and documented early 20th century Tallahassee social history"
      ],
      "biography": "Clara Turner Lewis brought the refined social traditions of Savannah's established families to Tallahassee during a transformative period in both the city's and the nation's history. Her 85-year life spanned from the Gilded Age through the Civil Rights era, and her role as the wife of a bank president during the Great Depression required exceptional grace, intelligence, and community leadership. She understood that maintaining community confidence in the bank required not just financial acumen but social leadership, and she excelled at both. Her extensive correspondence and social documentation provide invaluable insights into early-to-mid 20th century Tallahassee society.",
      "residences": ["Savannah, Georgia (birth-1905)", "Tallahassee, Florida (1905-1970)"],
      "businessInterests": ["Community Organizations", "Charitable Work", "Social Leadership", "Historical Documentation"],
      "categories": ["civic", "business"],
      "legacy": "Social leader who maintained community confidence and documented Tallahassee's social evolution"
    },
    {
      "id": 17,
      "name": "Frances Etheridge Lewis",
      "dates": "1837-1912",
      "generation": 2,
      "spouse": "Edward Lewis (1835-1901)",
      "children": ["George Edward Lewis Sr.", "Benjamin Cheever Lewis Jr.", "Jefferson Davis Lewis", "Frank Davis Lewis"],
      "birthPlace": "Wilmington, North Carolina",
      "occupation": "Homemaker, Mother, Community Matriarch",
      "education": "Private tutoring, domestic arts, basic literature",
      "militaryService": null,
      "achievements": [
        "Successfully raised four sons who became prominent community leaders",
        "Maintained household stability during Civil War and Reconstruction chaos",
        "Preserved family unity and values during most challenging period in Southern history",
        "Active founding member of local churches and women's charitable organizations",
        "Bridged antebellum traditions with New South realities for family adaptation",
        "Documented family history and traditions for future generations"
      ],
      "biography": "Frances Etheridge Lewis came from an established North Carolina merchant family and brought invaluable organizational skills and cultural knowledge to the Lewis household during the most turbulent period in American Southern history. Her marriage to Edward Lewis in 1855 began just as sectional tensions were reaching their peak, and her ability to maintain family stability through the Civil War, Reconstruction, and the economic upheavals of the late 19th century was extraordinary. The fact that all four of her sons became successful community leaders speaks to her exceptional motherhood and family guidance. Her detailed family records became the foundation for all subsequent Lewis family genealogical work.",
      "residences": ["Wilmington, North Carolina (birth-1855)", "Tallahassee, Florida (1855-1912)"],
      "businessInterests": ["Household Management", "Community Organizations", "Church Leadership", "Family Documentation"],
      "categories": ["founders", "civic"],
      "legacy": "Founding matriarch who preserved family through Civil War era and raised the modern generation"
    },
    {
      "id": 18,
      "name": "Mary McConnell Lewis",
      "dates": "1810-1890",
      "generation": 1,
      "spouse": "Benjamin Cheever Lewis (1804-1894)",
      "children": ["Edward Lewis", "Mary 'Polly' Lewis"],
      "birthPlace": "Richmond, Virginia",
      "occupation": "Pioneer Wife, Community Co-Founder",
      "education": "Basic education, domestic skills, some literature",
      "militaryService": null,
      "achievements": [
        "Co-founded Lewis family presence in territorial Florida alongside husband",
        "Established family's first social and business connections in frontier Tallahassee",
        "Supported husband's entrepreneurial ventures from territorial days through statehood",
        "Maintained household and family during uncertain territorial and early statehood periods",
        "Preserved Virginia family traditions while adapting to Florida frontier life",
        "Mentored other pioneer women in community building and social organization"
      ],
      "biography": "Mary McConnell Lewis was the true co-founder of the Lewis family legacy in Florida, embodying the courage and adaptability required of pioneer women in territorial America. Born during the Madison presidency in established Virginia, she chose to leave the security of her family's Richmond connections to venture into the uncertain frontier of territorial Florida with her husband. Her 80-year life encompassed the entire dramatic transformation of Florida from a sparsely settled territory to an established state, and her role in establishing the family's social and business foundations was absolutely crucial. Without her social intelligence, community-building skills, and unwavering support, Benjamin's business ventures might never have achieved their remarkable success.",
      "residences": ["Richmond, Virginia (birth-1836)", "Tallahassee, Florida (1836-1890)"],
      "businessInterests": ["Family Support", "Community Building", "Social Network Development", "Pioneer Women's Organizations"],
      "categories": ["founders"],
      "legacy": "Founding matriarch and true co-founder who established Lewis family social foundations in territorial Florida"
    },
    {
      "id": 19,
      "name": "George Edward Lewis IV",
      "dates": "1995-present",
      "generation": 6,
      "spouse": "Single",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Technology Professional, Digital Heritage Specialist, Software Developer",
      "education": "Florida State University, Computer Science; Georgia Tech, Digital Archives Management",
      "militaryService": null,
      "achievements": [
        "Pioneering digital preservation of Lewis family historical records and documents",
        "Created comprehensive online family genealogy database with multimedia integration",
        "Developed virtual reality tours of family historic properties including Wright house",
        "Modernizing family record-keeping with blockchain technology for permanence",
        "Leading family's entry into digital age while preserving traditional values",
        "Consulting for other historic families on digital heritage preservation"
      ],
      "biography": "George Edward Lewis IV represents the sixth generation of his naming line and the family's confident entry into the digital age. Born in the mid-1990s as the internet was transforming human communication, he has grown up with technology while maintaining deep appreciation for family history and traditions. His innovative work in digitizing family records ensures that nearly two centuries of Lewis family history will be preserved in multiple formats for future generations. His virtual reality projects allow people worldwide to experience the Frank Lloyd Wright house and other family properties, demonstrating how technology can democratize access to cultural heritage.",
      "residences": ["Tallahassee, Florida", "Technology hubs nationwide", "Digital nomad locations"],
      "businessInterests": ["Software Development", "Digital Heritage", "Family History Technology", "Virtual Reality Cultural Preservation"],
      "categories": ["advocates", "business"],
      "legacy": "Digital pioneer ensuring family heritage survives and thrives in the technological age"
    },
    {
      "id": 20,
      "name": "Sarah Lewis Martinez",
      "dates": "1998-present",
      "generation": 6,
      "spouse": "Single",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Environmental Scientist, Climate Research Specialist",
      "education": "University of Florida, Environmental Science; Stanford University, Climate Studies (in progress)",
      "militaryService": null,
      "achievements": [
        "Continuing great-grandfather George II's environmental advocacy with cutting-edge science",
        "Published researcher on Florida watershed systems and climate change impacts",
        "Leading campus sustainability initiatives and renewable energy projects",
        "Research focus on preserving North Florida's unique ecosystems under climate pressure",
        "Advocates for evidence-based climate policy at state and national levels",
        "Bridging family's traditional conservation values with modern climate science"
      ],
      "biography": "Sarah Lewis Martinez represents the evolution of the family's environmental advocacy from local watershed protection to global climate action. Born at the turn of the millennium as climate change was becoming a defining challenge, she has dedicated her studies and career to understanding and addressing environmental threats with scientific rigor. Her research builds upon her great-grandfather George Edward Lewis II's watershed protection work, expanding it to encompass the broader challenges of climate change, sea-level rise, and ecosystem preservation. Her bilingual abilities and multicultural perspective, reflecting her Martinez heritage, position her to work on environmental issues across cultural and linguistic boundaries.",
      "residences": ["Tallahassee, Florida", "University of Florida, Gainesville", "Stanford University", "Research field locations"],
      "businessInterests": ["Environmental Research", "Climate Science", "Renewable Energy", "International Environmental Policy"],
      "categories": ["advocates"],
      "legacy": "Next-generation environmental scientist addressing global climate challenges with family conservation values"
    },
    {
      "id": 21,
      "name": "Patricia Williams Lewis",
      "dates": "1968-present",
      "generation": 5,
      "spouse": "George Edward Lewis III (1965-present)",
      "children": ["George Edward Lewis IV", "Sarah Lewis Martinez"],
      "birthPlace": "Jacksonville, Florida",
      "occupation": "Healthcare Administrator, Rural Health Advocate",
      "education": "University of Florida, Healthcare Administration; Duke University, Public Health Policy",
      "militaryService": null,
      "achievements": [
        "Healthcare administration leadership serving North Florida's underserved communities",
        "Pioneered telemedicine programs for rural Florida healthcare access",
        "Active advocate for healthcare equity and accessibility initiatives",
        "Supports family heritage preservation while pursuing independent professional excellence",
        "Led major healthcare system improvements during COVID-19 pandemic",
        "Recognized statewide for innovative rural healthcare delivery models"
      ],
      "biography": "Patricia Williams Lewis brought her own distinguished Jacksonville family heritage to the Lewis family while maintaining unwavering commitment to public service through healthcare leadership. Her career reflects the family's ongoing dedication to community service, adapted for modern professional contexts and focused on addressing healthcare disparities in rural communities. She has been instrumental in supporting her husband's family heritage work while building her own remarkable career in healthcare administration, demonstrating how the contemporary Lewis family balances tradition with individual professional achievement.",
      "residences": ["Jacksonville, Florida (birth-1990)", "Tallahassee, Florida (1990-present)", "Healthcare work locations throughout North Florida"],
      "businessInterests": ["Healthcare Administration", "Rural Health Policy", "Telemedicine Innovation", "Heritage Support"],
      "categories": ["civic", "business"],
      "legacy": "Healthcare leader bridging family service traditions with modern public health innovation"
    },
    {
      "id": 22,
      "name": "Katherine Reed Lewis",
      "dates": "1945-2018",
      "generation": 5,
      "spouse": "William Van Brunt Lewis (1943-2011)",
      "children": ["William Van Brunt Lewis Jr.", "Katherine Lewis Thompson"],
      "birthPlace": "Atlanta, Georgia",
      "occupation": "Librarian, Information Science Professional, Family Archivist",
      "education": "Emory University, Library Science; University of Georgia, Information Systems",
      "militaryService": null,
      "achievements": [
        "Distinguished 40-year career in academic and public library systems",
        "Pioneered early computer cataloging systems in Southeast library networks",
        "Organized and digitized extensive Lewis family document collections",
        "Active leader in professional library organizations and literacy initiatives",
        "Preserved and indexed five generations of family correspondence and records",
        "Mentored dozens of librarians and information professionals throughout career"
      ],
      "biography": "Katherine Reed Lewis brought her Atlanta heritage and pioneering expertise in library and information science to the Lewis family during a period of technological transformation in information management. Her professional career paralleled the revolution in how information is stored, organized, and accessed, and she was at the forefront of implementing computer systems in library networks throughout the Southeast. Her meticulous work in organizing family records proved invaluable for preserving family history, and her professional skills ensured that Lewis family documents were preserved according to the highest archival standards.",
      "residences": ["Atlanta, Georgia (birth-1965)", "Tallahassee, Florida (1965-2018)", "Professional conference locations"],
      "businessInterests": ["Library Science", "Information Management", "Family Archives", "Professional Education"],
      "categories": ["civic", "advocates"],
      "legacy": "Information science pioneer who professionally preserved and organized family historical heritage"
    },
    {
      "id": 23,
      "name": "Jennifer Morgan Lewis",
      "dates": "1975-present",
      "generation": 5,
      "spouse": "Benjamin Bridges Lewis (1972-present)",
      "children": ["Morgan Lewis", "Benjamin Bridges Lewis Jr."],
      "birthPlace": "Orlando, Florida",
      "occupation": "Environmental Lawyer, Sustainability Consultant",
      "education": "University of Florida, Environmental Law; Harvard Law School, Environmental Policy",
      "militaryService": null,
      "achievements": [
        "Environmental law practice focusing on water rights and conservation",
        "Legal counsel for major Florida environmental protection initiatives",
        "Combines family environmental values with professional legal expertise",
        "Published expert on Florida water law and environmental regulation",
        "Advocates for sustainable development policies throughout Central Florida"
      ],
      "biography": "Jennifer Morgan Lewis brings professional legal expertise to the family's long-standing environmental advocacy, representing the evolution of the Lewis commitment to conservation from grassroots activism to sophisticated legal and policy work. Her environmental law practice focuses particularly on water rights and conservation issues, directly continuing the watershed protection work begun by her father-in-law George Edward Lewis II.",
      "residences": ["Orlando, Florida (birth-1995)", "Tallahassee, Florida", "Environmental law practice locations"],
      "businessInterests": ["Environmental Law", "Water Rights", "Conservation Policy", "Sustainable Development"],
      "categories": ["advocates", "business"],
      "legacy": "Environmental lawyer advancing family conservation values through professional legal advocacy"
    },
    {
      "id": 24,
      "name": "Cameron Lewis Barton",
      "dates": "2005-present",
      "generation": 6,
      "spouse": "Single",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Student, Arts Advocate, Youth Leader",
      "education": "Florida State University, Arts Management (in progress)",
      "militaryService": null,
      "achievements": [
        "Student leader in university arts and cultural programming",
        "Continuing family tradition of arts advocacy into next generation",
        "Active in youth leadership development programs",
        "Internships with major Southeast arts organizations"
      ],
      "biography": "Cameron Lewis Barton represents the emerging sixth generation of Lewis family arts advocacy, following the path established by great-grandmother Clifton Van Brunt Lewis and continued by mother Anne Cameron Lewis Barton. As a college student focused on arts management, she demonstrates how family values evolve and adapt across generations while maintaining core commitments to cultural enrichment and community service.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": ["Arts Management", "Youth Leadership", "Cultural Programming"],
      "categories": ["advocates"],
      "legacy": "Emerging arts leader representing sixth generation of family cultural advocacy"
    },
    {
      "id": 25,
      "name": "Elizabeth Anne Barton",
      "dates": "2007-present",
      "generation": 6,
      "spouse": "Single",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Student, Environmental Advocate, Youth Climate Activist",
      "education": "Leon High School (in progress), Youth Environmental Leadership Programs",
      "militaryService": null,
      "achievements": [
        "Youth climate activism and environmental education advocacy",
        "Student leader in school environmental sustainability programs",
        "Combines family's arts heritage with environmental activism",
        "Participates in youth climate conferences and advocacy events"
      ],
      "biography": "Elizabeth Anne Barton represents the synthesis of the family's artistic and environmental traditions in the next generation. Growing up during the climate change crisis, she has channeled both her mother's arts advocacy background and her family's environmental values into youth climate activism. Her dual heritage connects the cultural institutions founded by her great-great-grandmother Clifton with the environmental advocacy pioneered by her great-great-grandfather George Edward Lewis II.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": ["Environmental Advocacy", "Youth Leadership", "Arts and Environment Integration"],
      "categories": ["advocates"],
      "legacy": "Youth leader combining family's artistic and environmental traditions for climate action"
    },
    {
      "id": 26,
      "name": "William Van Brunt Lewis Jr.",
      "dates": "1975-present",
      "generation": 6,
      "spouse": "Amanda Foster Lewis (1978-present)",
      "children": ["William Van Brunt Lewis III", "Foster Lewis"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Architect, Historic Preservation Specialist",
      "education": "University of Florida Architecture, Graduate Certificate in Historic Preservation",
      "militaryService": null,
      "achievements": [
        "Specializes in historic preservation architecture throughout the Southeast",
        "Led restoration projects for significant Tallahassee landmarks",
        "Maintains family's Frank Lloyd Wright house with professional expertise",
        "Consulting architect for National Register historic properties",
        "Published expert on mid-century modern architecture in Florida"
      ],
      "biography": "William Van Brunt Lewis Jr. combines his family's architectural appreciation with professional expertise in historic preservation. Named for both his father and the Van Brunt family tradition, he has dedicated his career to preserving the built heritage that families like his helped create. His professional work on historic properties throughout the Southeast reflects the family's long-standing commitment to cultural preservation, while his stewardship of the family's Frank Lloyd Wright house ensures its preservation for future generations.",
      "residences": ["Tallahassee, Florida", "Historic preservation project sites throughout Southeast"],
      "businessInterests": ["Historic Preservation Architecture", "Cultural Heritage Conservation", "Mid-Century Modern Design"],
      "categories": ["advocates", "business"],
      "legacy": "Professional architect preserving family's architectural heritage and regional historic properties"
    },
    {
      "id": 27,
      "name": "Katherine Lewis Thompson",
      "dates": "1978-present",
      "generation": 6,
      "spouse": "James Thompson (1975-present)",
      "children": ["Lewis Thompson", "Katherine Thompson Jr."],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Digital Librarian, Information Systems Specialist",
      "education": "Florida State University, Information Studies; Simmons College, Digital Archives",
      "militaryService": null,
      "achievements": [
        "Continues mother Katherine's library science legacy with digital innovation",
        "Digital preservation specialist for major university library systems",
        "Expert in digitizing historical family and community records",
        "Bridges traditional library science with modern information technology",
        "Consulting specialist for digital archival projects nationwide"
      ],
      "biography": "Katherine Lewis Thompson represents the evolution of her mother Katherine Reed Lewis's library science expertise into the digital age. Her work in digital preservation and information systems reflects the family's long-standing commitment to preserving and organizing knowledge, while adapting these values to contemporary technological possibilities. Her professional expertise has proven invaluable for the family's own digital heritage preservation efforts.",
      "residences": ["Tallahassee, Florida", "Digital library project locations"],
      "businessInterests": ["Digital Library Science", "Information Systems", "Historical Preservation", "Technology Education"],
      "categories": ["advocates", "civic"],
      "legacy": "Digital information specialist continuing family's knowledge preservation traditions"
    },
    {
      "id": 28,
      "name": "Morgan Lewis",
      "dates": "2010-present",
      "generation": 6,
      "spouse": "Single",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Student, Junior Environmental Advocate",
      "education": "Middle school (in progress), Youth Environmental Programs",
      "militaryService": null,
      "achievements": [
        "Youngest family member actively engaged in environmental advocacy",
        "Participates in youth environmental education programs",
        "Student leader in school recycling and sustainability initiatives",
        "Represents seventh generation of family environmental consciousness"
      ],
      "biography": "Morgan Lewis, born in 2010, represents the newest generation of family environmental advocacy. Growing up in an era of increasing climate awareness, she has been raised with deep appreciation for environmental stewardship by parents Benjamin Bridges Lewis and Jennifer Morgan Lewis. Her early engagement with environmental issues suggests the continuation of the family's conservation values into the next generation.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": ["Environmental Education", "Youth Leadership", "Sustainability"],
      "categories": ["advocates"],
      "legacy": "Youngest environmental advocate representing family's continuing conservation commitment"
    },
    {
      "id": 29,
      "name": "Benjamin Bridges Lewis Jr.",
      "dates": "2012-present",
      "generation": 6,
      "spouse": "Single",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Student, Young Naturalist",
      "education": "Elementary school (in progress), Nature Education Programs",
      "militaryService": null,
      "achievements": [
        "Active participant in family environmental education activities",
        "Shows early interest in natural sciences and conservation",
        "Engages with family's environmental legacy through hands-on learning",
        "Represents potential future environmental leadership"
      ],
      "biography": "Benjamin Bridges Lewis Jr., born in 2012, carries forward the family naming tradition while growing up immersed in environmental values. As the son of environmental advocates Benjamin Bridges Lewis and Jennifer Morgan Lewis, he represents the potential for continued family environmental leadership into the mid-21st century and beyond.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": ["Natural Sciences", "Environmental Education", "Conservation"],
      "categories": ["advocates"],
      "legacy": "Young family member representing future environmental stewardship"
    },
    {
      "id": 30,
      "name": "Mary Catherine Sims",
      "dates": "2000-present",
      "generation": 6,
      "spouse": "Single",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "College Student, Education Major",
      "education": "Florida State University, Elementary Education (in progress)",
      "militaryService": null,
      "achievements": [
        "Continues family's multigenerational commitment to education",
        "Student teacher in Tallahassee elementary schools",
        "Active in educational equity and accessibility initiatives",
        "Bridges family's educational traditions with contemporary pedagogical approaches"
      ],
      "biography": "Mary Catherine Sims represents the continuation of the Lewis family's deep commitment to education into the 21st century. Following in her mother Mary Byrd Lewis Sims's footsteps, she is preparing for a career in elementary education while bringing contemporary understanding of educational equity and inclusive teaching methods to her family's traditional educational values.",
      "residences": ["Tallahassee, Florida", "Florida State University"],
      "businessInterests": ["Elementary Education", "Educational Equity", "Community Service"],
      "categories": ["civic", "advocates"],
      "legacy": "Next-generation educator continuing family's commitment to learning and teaching"
    },
    {
      "id": 31,
      "name": "Robert Lewis Sims Jr.",
      "dates": "2003-present",
      "generation": 6,
      "spouse": "Single",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "High School Student, Historic Preservation Enthusiast",
      "education": "Leon High School (in progress), Youth Historic Preservation Programs",
      "militaryService": null,
      "achievements": [
        "Active in Tallahassee youth historic preservation programs",
        "Student volunteer at family's historic properties",
        "Combines family's educational and preservation traditions",
        "Advocates for youth engagement in historic preservation"
      ],
      "biography": "Robert Lewis Sims Jr. represents the intersection of the family's educational and historic preservation traditions. Growing up surrounded by family historic properties and stories, he has developed a passionate interest in preserving Tallahassee's architectural and cultural heritage for his own generation and beyond.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": ["Historic Preservation", "Youth Education", "Cultural Heritage"],
      "categories": ["advocates", "civic"],
      "legacy": "Young preservationist connecting family heritage with peer education and engagement"
    },
    {
      "id": 32,
      "name": "Robert Sims",
      "dates": "1965-present",
      "generation": 5,
      "spouse": "Mary Byrd Lewis Sims (1968-present)",
      "children": ["Mary Catherine Sims", "Robert Lewis Sims Jr."],
      "birthPlace": "Gainesville, Florida",
      "occupation": "Engineering Professor, Historic Building Systems Specialist",
      "education": "University of Florida, Civil Engineering; Virginia Tech, Historic Preservation Engineering",
      "militaryService": null,
      "achievements": [
        "Professor of Civil Engineering with expertise in historic building systems",
        "Technical consultant for historic preservation projects throughout Florida",
        "Supports wife's historic preservation work with engineering expertise",
        "Published researcher on sustainable retrofitting of historic buildings",
        "Combines modern engineering with historic preservation principles"
      ],
      "biography": "Robert Sims brought engineering expertise and University of Florida Gator heritage to the Lewis family through his marriage to Mary Byrd Lewis Sims. His professional specialization in historic building systems has proven invaluable for the family's preservation efforts, particularly in maintaining historic properties like the Frank Lloyd Wright house and B.C. Lewis House. His technical knowledge complements his wife's educational and preservation work.",
      "residences": ["Gainesville, Florida (birth-1990)", "Tallahassee, Florida (1990-present)"],
      "businessInterests": ["Civil Engineering", "Historic Preservation Technology", "Sustainable Building Systems"],
      "categories": ["business", "advocates"],
      "legacy": "Engineering professional supporting family's historic preservation through technical expertise"
    },
    {
      "id": 33,
      "name": "Michael Barton",
      "dates": "1972-present",
      "generation": 5,
      "spouse": "Anne Cameron Lewis Barton (1974-present)",
      "children": ["Cameron Lewis Barton", "Elizabeth Anne Barton"],
      "birthPlace": "Atlanta, Georgia",
      "occupation": "Arts Development Consultant, Nonprofit Executive",
      "education": "Emory University, Business Administration; Harvard Kennedy School, Nonprofit Management",
      "militaryService": null,
      "achievements": [
        "Executive director of major Southeast arts development organizations",
        "Consultant for arts institutions seeking sustainable funding models",
        "Supports wife's cultural policy work with nonprofit management expertise",
        "Board member of multiple regional arts and cultural organizations",
        "Expert in public-private partnerships for cultural institution development"
      ],
      "biography": "Michael Barton brought Atlanta business heritage and sophisticated nonprofit management expertise to the Lewis family through his marriage to Anne Cameron Lewis Barton. His professional work in arts development and nonprofit leadership has strengthened the family's cultural advocacy, providing business acumen to complement their long-standing commitment to arts and cultural institutions.",
      "residences": ["Atlanta, Georgia (birth-1995)", "Tallahassee, Florida", "Arts development project locations"],
      "businessInterests": ["Nonprofit Management", "Arts Development", "Cultural Institution Sustainability"],
      "categories": ["business", "civic"],
      "legacy": "Nonprofit executive strengthening family's cultural institutions through professional management"
    },
    {
      "id": 34,
      "name": "Edward Lewis McConnell",
      "dates": "1832-1898",
      "generation": 2,
      "spouse": "Sarah Virginia Harrison (1835-1905)",
      "children": ["Multiple McConnell descendants"],
      "birthPlace": "Virginia",
      "occupation": "Merchant, Early Tallahassee Business Leader",
      "education": "Basic commercial education",
      "militaryService": "Confederate Army service during Civil War",
      "achievements": [
        "Mary McConnell Lewis's nephew who followed family to Florida",
        "Established successful merchant business in territorial Tallahassee",
        "Maintained family connections between Virginia McConnells and Florida Lewises",
        "Active in early Tallahassee business and civic development",
        "Survived Civil War and helped rebuild local economy during Reconstruction"
      ],
      "biography": "Edward Lewis McConnell, nephew of Mary McConnell Lewis, represents the extended family connections that enriched the Lewis family's social and business networks in early Tallahassee. His decision to follow his aunt's family to Florida brought additional McConnell family expertise and connections to the growing community, strengthening both families' business prospects and social standing.",
      "residences": ["Virginia (birth-1850s)", "Tallahassee, Florida (1850s-1898)"],
      "businessInterests": ["Merchant Trade", "Family Business Networks", "Community Development"],
      "categories": ["founders", "business"],
      "legacy": "Extended family connection who strengthened Lewis family's early Tallahassee business networks"
    },
    {
      "id": 35,
      "name": "James Patterson",
      "dates": "1830-1895",
      "generation": 2,
      "spouse": "Mary 'Polly' Lewis (1837-1910)",
      "children": ["Lewis Patterson", "Mary Patterson Williams", "James Patterson Jr."],
      "birthPlace": "South Carolina",
      "occupation": "Attorney, Judge, Civic Leader",
      "education": "University of South Carolina, Law",
      "militaryService": "Confederate Army officer during Civil War",
      "achievements": [
        "Prominent Tallahassee attorney and eventual judge",
        "Married into Lewis family, strengthening legal and social connections",
        "Served as Confederate officer, maintaining family honor during war",
        "Active in post-war legal reconstruction and community development",
        "Established Patterson family as prominent Tallahassee legal dynasty"
      ],
      "biography": "James Patterson brought distinguished South Carolina legal heritage and Confederate military service to the Lewis family through his marriage to Mary 'Polly' Lewis. His legal expertise and judicial service provided important professional connections for the Lewis family business interests, while his Patterson descendants became prominent in their own right in Tallahassee legal and social circles.",
      "residences": ["South Carolina (birth-1855)", "Tallahassee, Florida (1855-1895)"],
      "businessInterests": ["Legal Practice", "Judicial Service", "Community Leadership"],
      "categories": ["founders", "civic"],
      "legacy": "Legal professional who connected Lewis family to judicial and legal leadership in Tallahassee"
    },
    {
      "id": 36,
      "name": "Benjamin Cheever Lewis III",
      "dates": "1888-1918",
      "generation": 4,
      "spouse": "Never married",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Soldier, Bank Clerk",
      "education": "Local Tallahassee education, some college",
      "militaryService": "American Expeditionary Forces, World War I - died in France",
      "achievements": [
        "Served with distinction in American Expeditionary Forces during WWI",
        "Worked in family bank before military service",
        "Represented family's patriotic service to nation",
        "Died heroically serving in France during final months of Great War"
      ],
      "biography": "Benjamin Cheever Lewis III represented the family's sacrifice during World War I. Born as America emerged as a world power, he came of age during the Progressive Era and answered the call to military service when America entered the Great War. His death in France during the final months of the war represented the ultimate sacrifice of his generation. Though his life was cut short, his service embodied the family's values of duty, honor, and service to country.",
      "residences": ["Tallahassee, Florida (1888-1917)", "Military service locations, France"],
      "businessInterests": ["Banking", "Military Service", "Patriotic Duty"],
      "categories": ["business", "civic"],
      "legacy": "War hero who made ultimate sacrifice serving America during World War I"
    },
    {
      "id": 37,
      "name": "Mary Frances Lewis",
      "dates": "1883-1889",
      "generation": 4,
      "spouse": "Never married - died in childhood",
      "children": [],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Child",
      "education": "Early childhood education at home",
      "militaryService": null,
      "achievements": [
        "Beloved daughter who died tragically young",
        "Remembered fondly by family throughout generations",
        "Inspired family's later support for children's healthcare and education"
      ],
      "biography": "Mary Frances Lewis died tragically at age 6 from childhood illness, representing the heartbreak that 19th-century families often endured. Her brief life and early death deeply affected the Lewis family and contributed to their later philanthropic support for children's healthcare and educational institutions. She is remembered in family stories as a bright, curious child whose potential was cut short by the medical limitations of her era.",
      "residences": ["Tallahassee, Florida"],
      "businessInterests": [],
      "categories": ["founders"],
      "legacy": "Beloved child whose early death inspired family's commitment to children's welfare"
    },
    {
      "id": 38,
      "name": "Dr. William Henry Turner",
      "dates": "1820-1895",
      "generation": 2,
      "spouse": "Margaret Etheridge Turner (1825-1890)",
      "children": ["Clara Turner Lewis", "Multiple Turner descendants"],
      "birthPlace": "Savannah, Georgia",
      "occupation": "Physician, Community Leader",
      "education": "Medical College of Georgia, Harvard Medical School",
      "militaryService": "Confederate Army surgeon during Civil War",
      "achievements": [
        "Prominent Savannah physician and Clara Turner Lewis's father",
        "Served as Confederate Army surgeon during Civil War",
        "Established one of Savannah's first modern medical practices",
        "Connected Lewis family to distinguished Savannah medical and social circles",
        "Mentored young doctors throughout Georgia and Florida"
      ],
      "biography": "Dr. William Henry Turner, Clara Turner Lewis's father, brought distinguished medical heritage and Savannah social connections to the extended Lewis family network. His medical expertise and Confederate service paralleled the Lewis family's own wartime experiences, while his Savannah connections enriched the family's cultural and professional networks. His influence on Clara helped shape her into the confident community leader she became in Tallahassee.",
      "residences": ["Savannah, Georgia"],
      "businessInterests": ["Medical Practice", "Community Leadership", "Professional Medical Organizations"],
      "categories": ["civic", "business"],
      "legacy": "Distinguished physician who connected Lewis family to Savannah medical and social elite"
    },
    {
      "id": 39,
      "name": "Colonel Samuel Etheridge",
      "dates": "1800-1875",
      "generation": 1,
      "spouse": "Elizabeth Morrison Etheridge (1805-1880)",
      "children": ["Frances Etheridge Lewis", "Multiple Etheridge descendants"],
      "birthPlace": "Wilmington, North Carolina",
      "occupation": "Military Officer, Merchant",
      "education": "Military academy, commercial training",
      "militaryService": "U.S. Army pre-Civil War, Confederate Army colonel during Civil War",
      "achievements": [
        "Frances Etheridge Lewis's father - brought military heritage to family",
        "Successful merchant in Wilmington before Civil War",
        "Rose to colonel rank in Confederate Army during Civil War",
        "Connected Lewis family to established North Carolina military and commercial families",
        "Post-war community leader in Reconstruction North Carolina"
      ],
      "biography": "Colonel Samuel Etheridge, Frances Etheridge Lewis's father, brought military discipline and North Carolina merchant heritage to the Lewis family connections. His career spanned the antebellum military, Confederate service, and post-war reconstruction, providing the Lewis family with valuable connections to North Carolina's established military and commercial networks. His influence on Frances helped her navigate the challenges of Civil War and Reconstruction with strength and dignity.",
      "residences": ["Wilmington, North Carolina"],
      "businessInterests": ["Military Service", "Merchant Trade", "Community Leadership"],
      "categories": ["founders", "civic"],
      "legacy": "Military leader who brought North Carolina heritage and discipline to Lewis family network"
    },
    {
      "id": 40,
      "name": "Thomas McConnell",
      "dates": "1785-1865",
      "generation": 1,
      "spouse": "Jane Randolph McConnell (1790-1870)",
      "children": ["Mary McConnell Lewis", "Multiple McConnell descendants"],
      "birthPlace": "Richmond, Virginia",
      "occupation": "Tobacco Merchant, Planter",
      "education": "Basic commercial education",
      "militaryService": "Virginia militia during War of 1812",
      "achievements": [
        "Mary McConnell Lewis's father - provided Virginia founding heritage",
        "Successful tobacco merchant and planter in Richmond area",
        "Served in Virginia militia during War of 1812",
        "Connected Lewis family to established Virginia planter society",
        "Supported daughter's pioneering move to territorial Florida"
      ],
      "biography": "Thomas McConnell, Mary McConnell Lewis's father, represented the established Virginia planter and merchant class that provided the Lewis family with their foundational heritage. His tobacco business and planter background gave the family connections to Virginia's commercial and agricultural elite, while his support for his daughter's move to territorial Florida demonstrated the entrepreneurial spirit that characterized the family's expansion southward.",
      "residences": ["Richmond, Virginia"],
      "businessInterests": ["Tobacco Trade", "Plantation Agriculture", "Virginia Commercial Networks"],
      "categories": ["founders", "business"],
      "legacy": "Virginia patriarch who provided Lewis family with foundational planter heritage and commercial connections"
    },
    {
      "id": 41,
      "name": "Frank Lloyd Wright",
      "dates": "1867-1959",
      "generation": 4,
      "spouse": "Multiple marriages",
      "children": ["Multiple children"],
      "birthPlace": "Richland Center, Wisconsin",
      "occupation": "Architect, Design Revolutionary",
      "education": "University of Wisconsin, Self-taught architectural genius",
      "militaryService": null,
      "achievements": [
        "Designed Lewis Spring House - only private residence in Florida",
        "Revolutionary architect who transformed American residential design",
        "Created 'organic architecture' philosophy integrating buildings with landscape",
        "Designed over 1,000 structures including Fallingwater and Guggenheim Museum",
        "Became close friend and cultural advisor to George II and Clifton Lewis"
      ],
      "biography": "Frank Lloyd Wright's connection to the Lewis family through the commission of Lewis Spring House (1950-1954) created a lasting bond between America's greatest architect and one of Tallahassee's most culturally sophisticated families. Wright's friendship with George Edward Lewis II and Clifton Van Brunt Lewis represented the family's commitment to architectural innovation and cultural patronage. The house itself became a symbol of the family's progressive values and artistic appreciation.",
      "residences": ["Multiple locations nationwide", "Taliesin (Wisconsin)", "Taliesin West (Arizona)"],
      "businessInterests": ["Architectural Design", "Cultural Innovation", "Organic Architecture Philosophy"],
      "categories": ["advocates", "business"],
      "legacy": "Architectural genius whose friendship with Lewis family created Florida's only private Wright residence"
    },
    {
      "id": 42,
      "name": "David Mashburn",
      "dates": "1968-present",
      "generation": 5,
      "spouse": "Clifton Byrd Lewis Mashburn (1970-present)",
      "children": ["Lewis Mashburn descendants"],
      "birthPlace": "Birmingham, Alabama",
      "occupation": "Social Worker, Community Organizer",
      "education": "University of Alabama, Social Work; Auburn University, Community Development",
      "militaryService": null,
      "achievements": [
        "Community organizer specializing in rural Alabama and Florida social services",
        "Supports wife's civil rights advocacy with grassroots organizing expertise",
        "Expert in community development and social justice initiatives",
        "Bridges Lewis family values with contemporary social work practice",
        "Active in interfaith and multicultural community building"
      ],
      "biography": "David Mashburn brought Alabama social work heritage and community organizing expertise to the Lewis family through his marriage to Clifton Byrd Lewis Mashburn. His professional work in social services and community development complements his wife's continuation of her mother's civil rights advocacy, demonstrating how the family's progressive values continue to evolve and adapt to contemporary social challenges.",
      "residences": ["Birmingham, Alabama (birth-1990)", "Tallahassee, Florida", "Community development project locations"],
      "businessInterests": ["Social Work", "Community Development", "Social Justice Advocacy"],
      "categories": ["civic", "advocates"],
      "legacy": "Social work professional advancing family's commitment to social justice through community organizing"
    },
    {
      "id": 43,
      "name": "Amanda Foster Lewis",
      "dates": "1978-present",
      "generation": 6,
      "spouse": "William Van Brunt Lewis Jr. (1975-present)",
      "children": ["William Van Brunt Lewis III", "Foster Lewis"],
      "birthPlace": "Charleston, South Carolina",
      "occupation": "Museum Curator, Historic Preservation Specialist",
      "education": "College of Charleston, Art History; Winterthur, Museum Studies",
      "militaryService": null,
      "achievements": [
        "Curator at major Southeast museums specializing in historic house museums",
        "Expert in 18th and 19th-century American decorative arts",
        "Supports husband's architectural preservation work with curatorial expertise",
        "Published researcher on Southern domestic architecture and furnishings",
        "Consultant for historic house restorations throughout the Southeast"
      ],
      "biography": "Amanda Foster Lewis brought Charleston museum expertise and decorative arts knowledge to the Lewis family through her marriage to William Van Brunt Lewis Jr. Her professional work as a museum curator specializing in historic house museums perfectly complements her husband's architectural preservation practice, creating a powerful partnership for preserving and interpreting Southern cultural heritage.",
      "residences": ["Charleston, South Carolina (birth-2000)", "Tallahassee, Florida", "Museum work locations"],
      "businessInterests": ["Museum Curation", "Historic House Museums", "Decorative Arts", "Cultural Heritage"],
      "categories": ["advocates", "civic"],
      "legacy": "Museum professional combining Charleston heritage with Lewis family preservation traditions"
    },
    {
      "id": 44,
      "name": "James Thompson",
      "dates": "1975-present",
      "generation": 6,
      "spouse": "Katherine Lewis Thompson (1978-present)",
      "children": ["Lewis Thompson", "Katherine Thompson Jr."],
      "birthPlace": "Nashville, Tennessee",
      "occupation": "Information Technology Executive, Digital Systems Manager",
      "education": "Vanderbilt University, Computer Science; Stanford University, Information Systems Management",
      "militaryService": null,
      "achievements": [
        "Technology executive specializing in digital library and archival systems",
        "Supports wife's digital library work with IT infrastructure expertise",
        "Expert in large-scale data management and digital preservation systems",
        "Consultant for major university and cultural institution technology upgrades",
        "Bridges Music City tech industry with academic library technology"
      ],
      "biography": "James Thompson brought Nashville technology industry expertise to the Lewis family through his marriage to Katherine Lewis Thompson. His work in information technology systems management perfectly complements his wife's digital library science career, creating a powerful combination for advancing digital preservation and access to cultural heritage materials.",
      "residences": ["Nashville, Tennessee (birth-2000)", "Tallahassee, Florida", "Technology consulting locations"],
      "businessInterests": ["Information Technology", "Digital Systems Management", "Library Technology", "Data Preservation"],
      "categories": ["business", "advocates"],
      "legacy": "Technology executive supporting family's digital preservation and information management traditions"
    },
    {
      "id": 45,
      "name": "Burwell Connor Harrison",
      "dates": "1924-2008",
      "generation": 4,
      "spouse": "Betty Lewis Harrison (1924-2015)",
      "children": ["Multiple Harrison descendants"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Bank Executive, Computer Systems Pioneer, Naval Aviator",
      "education": "Leon High School (1942), University of the South (Sewanee), Naval Aviation Training",
      "militaryService": "U.S. Navy Naval Aviator, World War II Pacific Theater (enlisted May 1943)",
      "achievements": [
        "Senior Vice President of Lewis State Bank - direct family connection through marriage",
        "Pioneered banking technology by creating 'Bill the Bank' - predecessor to MasterCard",
        "Responsible for Lewis State Bank's Computer and Data Processing Center",
        "Naval aviator who served with distinction in WWII Pacific campaigns",
        "Married Betty Lewis, connecting directly to the Lewis banking family",
        "Worked with Florida Bankers Association on technology innovations",
        "Charter member of Holy Comforter Episcopal Church, Tallahassee",
        "Eagle Scout and Rotary International member"
      ],
      "biography": "Burwell Connor Harrison represents a crucial direct connection to the Lewis family through his marriage to Betty Lewis and his executive role at Lewis State Bank. Born in Tallahassee in 1924, he graduated from Leon High School in 1942 and immediately enlisted in the U.S. Navy, becoming a naval aviator in May 1943. After serving with distinction in the Pacific Theater during WWII, he returned to marry Betty Lewis and completed his education at the University of the South in Sewanee, Tennessee. His career at Lewis State Bank was transformative - as Senior Vice President, he revolutionized the bank's operations by pioneering computer and data processing systems and creating 'Bill the Bank,' an early credit card system that predated MasterCard. His technological innovations helped modernize the family bank during its final decades of operation. He retired in 1983 and lived in Lanark until his death in 2008, having been married to Betty Lewis Harrison for 61 years.",
      "residences": ["Tallahassee, Florida (1924-2008)", "Lanark, Florida (retirement)", "Naval service locations in Pacific"],
      "businessInterests": ["Banking Technology", "Computer Systems", "Data Processing", "Financial Innovation"],
      "categories": ["business", "civic"],
      "legacy": "WWII naval aviator who married into Lewis family and pioneered banking technology at Lewis State Bank"
    },
    {
      "id": 46,
      "name": "Betty Lewis Harrison",
      "dates": "1924-2015",
      "generation": 4,
      "spouse": "Burwell Connor Harrison (1924-2008)",
      "children": ["Multiple Harrison descendants"],
      "birthPlace": "Tallahassee, Florida",
      "occupation": "Lewis Family Member, Community Leader, Bank Executive's Wife",
      "education": "Local Tallahassee education",
      "militaryService": null,
      "achievements": [
        "Direct member of Lewis banking family through birth",
        "Married Burwell Connor Harrison, bringing him into Lewis State Bank leadership",
        "Supported husband's pioneering work in banking technology and computer systems",
        "Maintained Lewis family traditions and connections for over six decades",
        "Active in Tallahassee community organizations and church activities",
        "Bridged traditional Lewis family values with modern banking innovations",
        "Lived in Lanark during retirement, maintaining family heritage"
      ],
      "biography": "Betty Lewis Harrison was born into the Lewis banking family in 1924 and represented the direct family connection that brought Burwell Connor Harrison into the Lewis State Bank leadership. Her marriage to Burwell after his return from WWII naval service created one of the most important partnerships in the bank's modern history. As the wife of the bank's Senior Vice President and technology pioneer, she supported the innovations that modernized Lewis State Bank during its final decades of family operation. Her 61-year marriage to Burwell Harrison (1947-2008) spanned the entire transformation of both Tallahassee and the family bank from small-town institutions to modern, technology-driven organizations. She maintained strong Lewis family traditions while supporting her husband's groundbreaking work in banking technology.",
      "residences": ["Tallahassee, Florida (1924-2008)", "Lanark, Florida (retirement)"],
      "businessInterests": ["Family Banking Heritage", "Community Leadership", "Church Activities"],
      "categories": ["business", "civic"],
      "legacy": "Lewis family member who brought banking technology pioneer into family and supported bank's modernization"
    },
  ],
  "timeline": [
    {"year": 1804, "event": "Benjamin Cheever Lewis born in Virginia during Jefferson presidency"},
    {"year": 1810, "event": "Mary McConnell born in Richmond, Virginia - future founding matriarch"},
    {"year": 1821, "event": "Florida becomes U.S. territory - setting stage for Lewis family migration"},
    {"year": 1830, "event": "Benjamin marries Mary McConnell in Virginia"},
    {"year": 1835, "event": "Edward Lewis born in Virginia - last child born before migration"},
    {"year": 1836, "event": "Lewis family relocates to territorial Tallahassee - establishes druggist shop"},
    {"year": 1837, "event": "Mary 'Polly' Lewis born - first Lewis born in Tallahassee"},
    {"year": 1845, "event": "Florida achieves statehood - Lewis family witnesses territorial transformation"},
    {"year": 1850, "event": "B.C. Lewis House built on Park Avenue - family's architectural landmark"},
    {"year": 1855, "event": "Edward Lewis marries Frances Etheridge - uniting two prominent families"},
    {"year": 1856, "event": "Lewis State Bank founded by Benjamin C. Lewis - becomes Florida's oldest bank"},
    {"year": 1861, "event": "Civil War begins - Lewis family navigates wartime challenges and Confederate service"},
    {"year": 1862, "event": "Benjamin Cheever Lewis Jr. born during Civil War"},
    {"year": 1864, "event": "Jefferson Davis Lewis born - named for Confederate president"},
    {"year": 1866, "event": "Frank Davis Lewis born - completing Edward's four sons"},
    {"year": 1876, "event": "Reconstruction ends - Lewis family helps rebuild Tallahassee's economy"},
    {"year": 1880, "event": "George Edward Lewis Sr. born - third generation begins"},
    {"year": 1885, "event": "Clara Turner born in Savannah - future banker's wife"},
    {"year": 1890, "event": "Mary McConnell Lewis passes away - end of founding matriarch era"},
    {"year": 1894, "event": "Benjamin Cheever Lewis passes away - end of founding patriarch era"},
    {"year": 1896, "event": "George Lewis Sr. enters Virginia Military Institute - establishing military tradition"},
    {"year": 1900, "event": "George Lewis Sr. graduates VMI - first generation with formal military education"},
    {"year": 1901, "event": "Edward Lewis passes away - end of second generation leadership"},
    {"year": 1905, "event": "George Lewis Sr. marries Clara Turner - bringing Savannah heritage to family"},
    {"year": 1912, "event": "Frances Etheridge Lewis passes away - end of Civil War era matriarch"},
    {"year": 1919, "event": "Clifton Van Brunt born in North Carolina - future civil rights leader"},
    {"year": 1929, "event": "Stock Market Crash begins Great Depression - tests family bank's resilience"},
    {"year": 1933, "event": "George Lewis Sr. becomes bank president during Great Depression crisis"},
    {"year": 1924, "event": "Burwell Connor Harrison born in Tallahassee - future Lewis State Bank executive"},
    {"year": 1924, "event": "Betty Lewis born in Tallahassee - Lewis banking family member"},
    {"year": 1941, "event": "George Edward Lewis II born during World War II - fourth generation begins"},
    {"year": 1942, "event": "George Lewis Sr. serves on Leon County Commission during wartime"},
    {"year": 1942, "event": "Burwell Harrison enlists in U.S. Navy for Pacific Theater service"},
    {"year": 1943, "event": "William Van Brunt Lewis born - continuing family tradition"},
    {"year": 1945, "event": "World War II ends - family witnesses global transformation"},
    {"year": 1947, "event": "Burwell Harrison marries Betty Lewis - joins Lewis State Bank family"},
    {"year": 1950, "event": "George Lewis II and Clifton Van Brunt meet - beginning transformative partnership"},
    {"year": 1960, "event": "Burwell Harrison begins pioneering computer systems at Lewis State Bank"},
    {"year": 1970, "event": "Burwell Harrison creates 'Bill the Bank' - early credit card system"},
    {"year": 1954, "event": "Frank Lloyd Wright's Lewis Spring House completed - architectural milestone"},
    {"year": 1960, "event": "LeMoyne Center for Visual Arts co-founded by Clifton Lewis"},
    {"year": 1960, "event": "Tallahassee Museum co-founded by Clifton Lewis"},
    {"year": 1965, "event": "George Edward Lewis III born - fifth generation leadership begins"},
    {"year": 1968, "event": "Mary Byrd Lewis Sims born - continuing family educational traditions"},
    {"year": 1970, "event": "Clara Turner Lewis passes away - end of Great Depression era leadership"},
    {"year": 1970, "event": "Clifton Byrd Lewis Mashburn born - civil rights legacy continues"},
    {"year": 1972, "event": "George Edward Lewis Sr. passes away at age 92 - end of VMI era"},
    {"year": 1972, "event": "Benjamin Bridges Lewis born - environmental advocacy next generation"},
    {"year": 1974, "event": "Anne Cameron Lewis Barton born - arts leadership continues"},
    {"year": 1975, "event": "Jennifer Morgan born in Orlando - future environmental lawyer"},
    {"year": 1985, "event": "Lewis State Bank merges after 129 years of family operation"},
    {"year": 1990, "event": "George Lewis III marries Patricia Williams - Jacksonville heritage joins family"},
    {"year": 1995, "event": "George Edward Lewis IV born - sixth generation and digital age begins"},
    {"year": 1998, "event": "Sarah Lewis Martinez born - climate change generation"},
    {"year": 2000, "event": "Millennium celebration - family spans three centuries of American history"},
    {"year": 2005, "event": "Cameron Lewis Barton born - sixth generation arts advocacy"},
    {"year": 2007, "event": "George Lewis II receives Watershed Champion award for environmental work"},
    {"year": 2011, "event": "William Van Brunt Lewis passes away - end of mid-century generation"},
    {"year": 2014, "event": "Clifton Van Brunt Lewis passes away - end of civil rights pioneer era"},
    {"year": 2018, "event": "Katherine Reed Lewis passes away - end of information science era"},
    {"year": 2000, "event": "Mary Catherine Sims born - continuing family educational traditions"},
    {"year": 2003, "event": "Robert Lewis Sims Jr. born - next generation historic preservation advocate"},
    {"year": 2005, "event": "Cameron Lewis Barton born - sixth generation arts advocacy begins"},
    {"year": 2007, "event": "Elizabeth Anne Barton born - combining arts and environmental traditions"},
    {"year": 2010, "event": "Morgan Lewis born - youngest environmental advocate"},
    {"year": 2012, "event": "Benjamin Bridges Lewis Jr. born - seventh generation environmental stewardship"},
    {"year": 2015, "event": "Lewis Family Digital Heritage Project launched by George Lewis IV"},
    {"year": 2018, "event": "Katherine Reed Lewis passes away - end of information science pioneer era"},
    {"year": 2020, "event": "COVID-19 pandemic - Patricia Lewis leads healthcare response efforts"},
    {"year": 2025, "event": "George Edward Lewis II passes away - end of environmental advocacy founding era"},
    {"year": 1785, "event": "Thomas McConnell born in Richmond - Mary's father and Virginia patriarch"},
    {"year": 1800, "event": "Colonel Samuel Etheridge born in Wilmington - Frances's father"},
    {"year": 1820, "event": "Dr. William Henry Turner born in Savannah - Clara's father"},
    {"year": 1830, "event": "James Patterson born in South Carolina - future judge and Polly's husband"},
    {"year": 1832, "event": "Edward Lewis McConnell born - nephew who follows family to Florida"},
    {"year": 1867, "event": "Frank Lloyd Wright born in Wisconsin - future family architect"},
    {"year": 1883, "event": "Mary Frances Lewis born - beloved daughter who dies young"},
    {"year": 1888, "event": "Benjamin Cheever Lewis III born - future WWI hero"},
    {"year": 1889, "event": "Mary Frances Lewis dies at age 6 - family tragedy that shapes philanthropy"},
    {"year": 1918, "event": "Benjamin Cheever Lewis III dies in France - WWI sacrifice"},
    {"year": 1950, "event": "Frank Lloyd Wright begins designing Lewis Spring House"},
    {"year": 1959, "event": "Frank Lloyd Wright passes away - end of architectural friendship"},
    {"year": 1968, "event": "David Mashburn born in Birmingham - future social work advocate"},
    {"year": 1972, "event": "Michael Barton born in Atlanta - future nonprofit executive"},
    {"year": 1975, "event": "William Van Brunt Lewis Jr. born - future preservation architect"},
    {"year": 1975, "event": "James Thompson born in Nashville - future technology executive"},
    {"year": 1978, "event": "Katherine Lewis Thompson born - digital library pioneer"},
    {"year": 1978, "event": "Amanda Foster Lewis born in Charleston - museum curator"},
    {"year": 1990, "event": "Patricia Williams marries George Lewis III - healthcare expertise joins family"},
    {"year": 1995, "event": "Jennifer Morgan marries Benjamin Bridges Lewis - environmental law expertise"},
    {"year": 2000, "event": "Amanda Foster marries William Lewis Jr. - Charleston heritage joins family"},
    {"year": 2002, "event": "James Thompson marries Katherine Lewis Thompson - Nashville tech joins family"}
  ],
  "properties": [
    {
      "name": "Lewis State Bank",
      "established": 1856,
      "significance": "Florida's oldest continuously operating bank until 1985 merger",
      "description": "Founded by Benjamin Cheever Lewis in territorial Florida, this institution survived Civil War, Reconstruction, two World Wars, the Great Depression, and multiple economic cycles. Operated continuously by the Lewis family for 129 years, it served as the financial backbone of Tallahassee's development from frontier town to state capital. The bank's survival through the 1930s financial crisis, when many banks failed, demonstrated the Lewis family's conservative financial management and community trust.",
      "currentStatus": "Merged with larger institution in 1985, building now houses other businesses",
      "historicalImpact": "Financed much of Tallahassee's early development and provided stability during regional economic crises"
    },
    {
      "name": "Lewis Spring House",
      "established": 1954,
      "significance": "Only private Frank Lloyd Wright residence in Florida",
      "description": "One of only two 'pod-shaped' houses in Wright's entire career, commissioned by George Edward Lewis II and Clifton Van Brunt Lewis. The house represents Wright's late-period organic architecture, built around a natural spring with innovative heating and cooling systems. Features Wright's signature horizontal lines, natural materials, and seamless integration with the landscape. The commission represented the family's commitment to architectural innovation and cultural patronage.",
      "currentStatus": "Privately owned by Lewis family, occasionally opened for educational tours",
      "historicalImpact": "Demonstrates Florida's participation in modern architectural movements and family's cultural leadership"
    },
    {
      "name": "B.C. Lewis House",
      "established": 1850,
      "significance": "Listed on National Register of Historic Places",
      "description": "Original family residence on Park Avenue, representing antebellum Tallahassee architecture and early Florida statehood period. Built by Benjamin Cheever Lewis during the family's establishment phase, it reflects the prosperity achieved through the druggist business and early banking ventures. The house survived the Civil War and Reconstruction, serving as family headquarters for nearly 150 years.",
      "currentStatus": "Historic landmark, preserved as example of mid-19th century Tallahassee architecture",
      "historicalImpact": "Represents transition from territorial Florida to established statehood and family's foundational success"
    },
    {
      "name": "LeMoyne Center for Visual Arts",
      "established": 1963,
      "significance": "Major cultural institution co-founded by Clifton Van Brunt Lewis",
      "description": "Premier visual arts center serving Tallahassee and North Florida, co-founded by Clifton Lewis during the civil rights era. The center has exhibited works by internationally recognized artists while supporting local and regional talent. Named after Jacques LeMoyne, the 16th-century French artist who documented early Florida. The institution reflects the Lewis family's commitment to cultural enrichment and community development, providing arts education and exhibition opportunities for over six decades.",
      "currentStatus": "Active arts center offering exhibitions, education programs, and community events",
      "historicalImpact": "Established Tallahassee as a cultural destination and provided arts opportunities during social transformation era"
    },
    {
      "name": "Tallahassee Museum",
      "established": 1957,
      "significance": "Natural and cultural history museum co-founded by Clifton Van Brunt Lewis",
      "description": "Preserves North Florida's natural and cultural heritage through live animal exhibits, historic buildings, and educational programs. Co-founded by Clifton Lewis as part of her vision for comprehensive cultural and environmental education. The museum features native Florida wildlife, relocated historic structures, and programs connecting visitors with regional environmental and cultural history. Reflects the family's early recognition of the importance of environmental education and historic preservation.",
      "currentStatus": "Active museum and educational center with over 52 acres of exhibits and programs",
      "historicalImpact": "Pioneer in environmental education and historic preservation in North Florida"
    },
    {
      "name": "VMI Alumni Network - Lewis Family Legacy",
      "established": 1900,
      "significance": "Multi-generational Virginia Military Institute family tradition",
      "description": "Beginning with George Edward Lewis Sr.'s Class of 1900 graduation, the Lewis family established a strong tradition of VMI education and military values. This connection provided leadership training, national networking opportunities, and military discipline that served family members in business and civic leadership. The VMI tradition influenced family values of duty, honor, and service to community.",
      "currentStatus": "Ongoing family connection through alumni network and traditions",
      "historicalImpact": "Provided leadership education and national connections that enhanced family's community influence"
    },
    {
      "name": "Lake Jackson Watershed Conservation",
      "established": 1970,
      "significance": "Environmental advocacy initiated by George Edward Lewis II",
      "description": "George Lewis II's pioneering work in watershed protection helped establish environmental consciousness in Tallahassee's development planning. His advocacy led to protective regulations, conservation easements, and sustainable development practices that preserved North Florida's unique karst landscape and water systems. This work earned him the 2007 Watershed Champion award and influenced a generation of environmental advocates.",
      "currentStatus": "Ongoing conservation efforts continued by family members and environmental organizations",
      "historicalImpact": "Pioneered environmental protection in North Florida and influenced sustainable development practices"
    },
    {
      "name": "Lewis Family Archives and Digital Heritage Project",
      "established": 2015,
      "significance": "Digital preservation initiative led by George Edward Lewis IV",
      "description": "Comprehensive digitization of nearly two centuries of Lewis family documents, photographs, correspondence, and records. This project employs modern archival techniques, blockchain technology, and virtual reality to preserve family history for future generations. The initiative serves as a model for other historic families and institutions seeking to preserve heritage in digital formats.",
      "currentStatus": "Active project with ongoing digitization and public access components",
      "historicalImpact": "Demonstrates how traditional families can embrace technology to preserve and share heritage"
    },
    {
      "name": "Civil Rights Movement Documentation - Clifton Van Brunt Lewis Papers",
      "established": 1950,
      "significance": "Historical record of civil rights activism in Tallahassee",
      "description": "Clifton Van Brunt Lewis's extensive documentation of civil rights activities, correspondence with movement leaders, and records of integration efforts in Tallahassee's cultural institutions. These papers provide invaluable insights into how the Civil Rights Movement unfolded in Florida's capital city and the role of progressive white allies in advancing racial equality.",
      "currentStatus": "Archived at Florida State University and available for research",
      "historicalImpact": "Documents crucial period in Tallahassee's social transformation and civil rights history"
    },
    {
      "name": "Environmental Law Practice - Lewis Conservation Legal Legacy",
      "established": 2000,
      "significance": "Professional environmental advocacy through legal expertise",
      "description": "Jennifer Morgan Lewis's environmental law practice represents the evolution of family conservation values into sophisticated legal and policy advocacy. Her work on water rights, conservation easements, and sustainable development law continues the family's environmental leadership through professional legal channels, protecting Florida's natural resources for future generations.",
      "currentStatus": "Active legal practice specializing in environmental and conservation law",
      "historicalImpact": "Advances environmental protection through legal advocacy and policy development"
    }
  ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing enhanced application...');
    initializeNavigation();
    renderFamilyTree();
    renderTimeline();
    renderMembers();
    renderProperties();
    initializeSearch();
    initializeModal();
    initializeCategoryFilters();
    initializeHistoricalContext();
    initializeMigrationMap();
    initializePhotoGalleries();
    animateOnScroll();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            console.log('Navigation clicked:', targetId);
            
            if (targetSection) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                // Scroll to section with offset for fixed navbar
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Enhanced family tree rendering with connections
function renderFamilyTree() {
    const familyTree = document.getElementById('family-tree');
    if (!familyTree) return;

    const generations = {};
    
    familyData.familyMembers.forEach(member => {
        if (!generations[member.generation]) {
            generations[member.generation] = [];
        }
        generations[member.generation].push(member);
    });

    let treeHTML = '<div class="family-connections">';
    
    // Render generations
    Object.keys(generations).sort((a, b) => a - b).forEach(gen => {
        treeHTML += `<div class="tree-level" data-generation="${gen}">`;
        treeHTML += `<h3 class="generation-header">Generation ${gen}</h3>`;
        
        generations[gen].forEach((member, index) => {
            const hasChildren = familyData.familyMembers.some(m => 
                m.generation == (parseInt(gen) + 1) && 
                (member.children && member.children.includes(m.name))
            );
            
            const hasSpouse = member.spouse && member.spouse !== 'Single' && member.spouse !== 'Never married';
            
            treeHTML += `
                <div class="tree-node tree-connection ${hasChildren ? 'has-children' : ''} ${hasSpouse ? 'has-spouse' : ''}" 
                     data-member-id="${member.id}" 
                     data-generation="${member.generation}"
                     data-index="${index}"
                     onclick="showMemberModal(${member.id})"
                     onmouseover="highlightConnections(${member.id})"
                     onmouseout="clearHighlights()">
                    <div class="node-photo">
                        <img src="images/family-members/${member.id}-${member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.jpg" 
                             alt="${member.name}" 
                             class="tree-node-photo"
                             onerror="this.src='images/placeholder-portrait-small.jpg'; this.onerror=null;">
                    </div>
                    <div class="node-info">
                        <h4>${member.name}</h4>
                        <div class="dates">${member.dates}</div>
                        <div class="occupation">${member.occupation || 'Family Member'}</div>
                        ${hasSpouse ? `<div class="spouse-indicator">♥ Married</div>` : ''}
                        ${hasChildren ? `<div class="children-indicator">▼ Children</div>` : ''}
                    </div>
                </div>
            `;
        });
        treeHTML += `</div>`;
    });
    
    treeHTML += '</div>';
    familyTree.innerHTML = treeHTML;
    
    // Add connection lines after DOM is updated
    setTimeout(() => {
        drawConnectionLines();
    }, 100);
    
    console.log('Enhanced family tree with connections rendered');
}

// Draw connection lines between family members
function drawConnectionLines() {
    const familyTreeContainer = document.querySelector('.family-tree-container');
    if (!familyTreeContainer) return;
    
    // Remove existing connection lines
    familyTreeContainer.querySelectorAll('.connection-line').forEach(line => line.remove());
    
    familyData.familyMembers.forEach(member => {
        if (!member.children || !Array.isArray(member.children)) return;
        
        const parentNode = document.querySelector(`[data-member-id="${member.id}"]`);
        if (!parentNode) return;
        
        member.children.forEach(childName => {
            const childMember = familyData.familyMembers.find(m => m.name === childName);
            if (!childMember) return;
            
            const childNode = document.querySelector(`[data-member-id="${childMember.id}"]`);
            if (!childNode) return;
            
            // Create connection line
            const line = document.createElement('div');
            line.className = 'connection-line parent-child';
            line.dataset.parentId = member.id;
            line.dataset.childId = childMember.id;
            
            // Calculate positions
            const parentRect = parentNode.getBoundingClientRect();
            const childRect = childNode.getBoundingClientRect();
            const containerRect = familyTreeContainer.getBoundingClientRect();
            
            const parentCenterX = parentRect.left + parentRect.width / 2 - containerRect.left;
            const parentBottom = parentRect.bottom - containerRect.top;
            const childCenterX = childRect.left + childRect.width / 2 - containerRect.left;
            const childTop = childRect.top - containerRect.top;
            
            // Position the line
            const lineWidth = Math.abs(childCenterX - parentCenterX);
            const lineHeight = Math.abs(childTop - parentBottom);
            
            if (lineWidth > 0 && lineHeight > 0) {
                line.style.position = 'absolute';
                line.style.left = `${Math.min(parentCenterX, childCenterX)}px`;
                line.style.top = `${parentBottom}px`;
                line.style.width = `${lineWidth}px`;
                line.style.height = `${lineHeight}px`;
                line.style.borderLeft = '2px solid var(--color-heritage-gold)';
                line.style.borderBottom = '2px solid var(--color-heritage-gold)';
                line.style.borderRight = parentCenterX > childCenterX ? '2px solid var(--color-heritage-gold)' : 'none';
                
                familyTreeContainer.appendChild(line);
            }
        });
    });
}

// Highlight family connections on hover
function highlightConnections(memberId) {
    const member = familyData.familyMembers.find(m => m.id == memberId);
    if (!member) return;
    
    // Clear existing highlights
    clearHighlights();
    
    // Highlight the current member
    const currentNode = document.querySelector(`[data-member-id="${memberId}"]`);
    if (currentNode) {
        currentNode.classList.add('highlighted');
    }
    
    // Highlight spouse
    if (member.spouse && member.spouse !== 'Single' && member.spouse !== 'Never married') {
        const spouseMember = familyData.familyMembers.find(m => 
            m.name === member.spouse || m.spouse === member.name
        );
        if (spouseMember) {
            const spouseNode = document.querySelector(`[data-member-id="${spouseMember.id}"]`);
            if (spouseNode) {
                spouseNode.classList.add('highlighted-spouse');
            }
        }
    }
    
    // Highlight children
    if (member.children && Array.isArray(member.children)) {
        member.children.forEach(childName => {
            const childMember = familyData.familyMembers.find(m => m.name === childName);
            if (childMember) {
                const childNode = document.querySelector(`[data-member-id="${childMember.id}"]`);
                if (childNode) {
                    childNode.classList.add('highlighted-child');
                }
            }
        });
    }
    
    // Highlight parents
    const parent = familyData.familyMembers.find(p => 
        p.children && Array.isArray(p.children) && p.children.includes(member.name)
    );
    if (parent) {
        const parentNode = document.querySelector(`[data-member-id="${parent.id}"]`);
        if (parentNode) {
            parentNode.classList.add('highlighted-parent');
        }
    }
    
    // Highlight connection lines
    document.querySelectorAll('.connection-line').forEach(line => {
        if (line.dataset.parentId == memberId || line.dataset.childId == memberId) {
            line.classList.add('highlighted-line');
        }
    });
}

// Clear all highlights
function clearHighlights() {
    document.querySelectorAll('.tree-node').forEach(node => {
        node.classList.remove('highlighted', 'highlighted-spouse', 'highlighted-child', 'highlighted-parent');
    });
    
    document.querySelectorAll('.connection-line').forEach(line => {
        line.classList.remove('highlighted-line');
    });
}

// Make functions globally available
window.highlightConnections = highlightConnections;
window.clearHighlights = clearHighlights;

// Timeline rendering
function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;

    let timelineHTML = '';
    
    familyData.timeline.forEach((item, index) => {
        timelineHTML += `
            <div class="timeline-item" style="animation-delay: ${index * 0.1}s">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-content">
                    <p>${item.event}</p>
                </div>
            </div>
        `;
    });

    timelineContainer.innerHTML = timelineHTML;
    console.log('Enhanced timeline rendered');
}

// Members rendering with enhanced profiles
function renderMembers(filter = 'all') {
    const membersGrid = document.getElementById('members-grid');
    if (!membersGrid) return;

    let filteredMembers = familyData.familyMembers;
    
    if (filter !== 'all') {
        filteredMembers = familyData.familyMembers.filter(member => 
            member.categories && member.categories.includes(filter)
        );
    }

    let membersHTML = '';
    filteredMembers.forEach((member, index) => {
        membersHTML += `
            <div class="member-card" data-member-id="${member.id}" style="animation-delay: ${index * 0.1}s" onclick="showMemberModal(${member.id})">
                <h3>${member.name}</h3>
                <div class="dates">${member.dates}</div>
                <div class="occupation">${member.occupation || 'Family Member'}</div>
                <div class="generation">Generation ${member.generation}</div>
                <ul class="achievements">
                    ${member.achievements ? member.achievements.slice(0, 3).map(achievement => `<li>${achievement}</li>`).join('') : '<li>Family member</li>'}
                </ul>
                <div class="view-more">Click to view full profile</div>
            </div>
        `;
    });

    membersGrid.innerHTML = membersHTML;
    
    // Animate cards
    setTimeout(() => {
        document.querySelectorAll('.member-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
    
    console.log('Enhanced members rendered with filter:', filter);
}

// Properties rendering
function renderProperties() {
    const propertiesGrid = document.getElementById('properties-grid');
    if (!propertiesGrid) return;

    let propertiesHTML = '';
    
    familyData.properties.forEach((property, index) => {
        const imageFileName = property.name.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .replace(/--+/g, '-');
        
        propertiesHTML += `
            <div class="property-card" style="animation-delay: ${index * 0.15}s">
                <img src="images/properties/${imageFileName}.jpg" 
                     alt="${property.name}" 
                     class="property-image"
                     onerror="this.src='images/placeholder-property.jpg'; this.onerror=null;">
                <h3>${property.name}</h3>
                <div class="established">Established: ${property.established}</div>
                <div class="significance">${property.significance}</div>
                <p>${property.description}</p>
                ${property.currentStatus ? `
                    <div class="current-status">
                        <strong>Current Status:</strong> ${property.currentStatus}
                    </div>
                ` : ''}
                ${property.historicalImpact ? `
                    <div class="historical-impact">
                        <strong>Historical Impact:</strong> ${property.historicalImpact}
                    </div>
                ` : ''}
            </div>
        `;
    });

    propertiesGrid.innerHTML = propertiesHTML;

    // Animate property cards
    setTimeout(() => {
        document.querySelectorAll('.property-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
    
    console.log('Enhanced properties rendered');
}

// Category filtering
function initializeCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter members
            renderMembers(category);
            
            console.log('Category filter applied:', category);
        });
    });
}

// Enhanced search functionality with advanced filters
function initializeSearch() {
    const familySearch = document.getElementById('family-search');
    const generationFilter = document.getElementById('generation-filter');
    const occupationFilter = document.getElementById('occupation-filter');
    const locationFilter = document.getElementById('location-filter');
    const militaryFilter = document.getElementById('military-filter');
    const startYear = document.getElementById('start-year');
    const endYear = document.getElementById('end-year');
    const clearFilters = document.getElementById('clear-filters');
    const searchSummary = document.getElementById('search-results-summary');
    
    if (!familySearch) return;

    // Main search function
    function performSearch() {
        const searchTerm = familySearch.value.toLowerCase().trim();
        const genFilter = generationFilter.value;
        const occFilter = occupationFilter.value;
        const locFilter = locationFilter.value;
        const milFilter = militaryFilter.value;
        const startYearValue = startYear.value;
        const endYearValue = endYear.value;
        
        const treeNodes = document.querySelectorAll('.tree-node');
        let visibleCount = 0;
        let totalCount = treeNodes.length;
        
        treeNodes.forEach(node => {
            const memberId = node.dataset.memberId;
            const member = familyData.familyMembers.find(m => m.id == memberId);
            
            if (!member) {
                node.style.display = 'none';
                return;
            }
            
            let visible = true;
            
            // Text search
            if (searchTerm) {
                const memberName = member.name.toLowerCase();
                const memberOccupation = (member.occupation || '').toLowerCase();
                const memberBirthPlace = (member.birthPlace || '').toLowerCase();
                const memberEducation = (member.education || '').toLowerCase();
                
                if (!memberName.includes(searchTerm) && 
                    !memberOccupation.includes(searchTerm) && 
                    !memberBirthPlace.includes(searchTerm) &&
                    !memberEducation.includes(searchTerm)) {
                    visible = false;
                }
            }
            
            // Generation filter
            if (genFilter !== 'all' && member.generation != genFilter) {
                visible = false;
            }
            
            // Occupation filter
            if (occFilter !== 'all' && visible) {
                const occupation = (member.occupation || '').toLowerCase();
                switch (occFilter) {
                    case 'banking':
                        visible = occupation.includes('bank') || occupation.includes('finance');
                        break;
                    case 'legal':
                        visible = occupation.includes('attorney') || occupation.includes('judge') || occupation.includes('legal');
                        break;
                    case 'military':
                        visible = member.militaryService !== null;
                        break;
                    case 'education':
                        visible = occupation.includes('teacher') || occupation.includes('education') || occupation.includes('librarian');
                        break;
                    case 'arts':
                        visible = occupation.includes('arts') || occupation.includes('museum') || occupation.includes('cultural');
                        break;
                    case 'environmental':
                        visible = occupation.includes('environmental') || occupation.includes('conservation');
                        break;
                    case 'healthcare':
                        visible = occupation.includes('health') || occupation.includes('medical') || occupation.includes('physician');
                        break;
                    case 'technology':
                        visible = occupation.includes('technology') || occupation.includes('computer') || occupation.includes('digital');
                        break;
                }
            }
            
            // Location filter
            if (locFilter !== 'all' && visible) {
                const birthPlace = (member.birthPlace || '').toLowerCase();
                const residences = (member.residences || []).join(' ').toLowerCase();
                switch (locFilter) {
                    case 'virginia':
                        visible = birthPlace.includes('virginia') || residences.includes('virginia');
                        break;
                    case 'north-carolina':
                        visible = birthPlace.includes('north carolina') || residences.includes('north carolina');
                        break;
                    case 'south-carolina':
                        visible = birthPlace.includes('south carolina') || residences.includes('south carolina');
                        break;
                    case 'georgia':
                        visible = birthPlace.includes('georgia') || residences.includes('georgia');
                        break;
                    case 'florida':
                        visible = birthPlace.includes('florida') || residences.includes('florida');
                        break;
                    case 'tallahassee':
                        visible = birthPlace.includes('tallahassee') || residences.includes('tallahassee');
                        break;
                }
            }
            
            // Military service filter
            if (milFilter !== 'all' && visible) {
                const militaryService = (member.militaryService || '').toLowerCase();
                const education = (member.education || '').toLowerCase();
                switch (milFilter) {
                    case 'military':
                        visible = member.militaryService !== null;
                        break;
                    case 'wwi':
                        visible = militaryService.includes('world war i') || militaryService.includes('wwi');
                        break;
                    case 'wwii':
                        visible = militaryService.includes('world war ii') || militaryService.includes('wwii');
                        break;
                    case 'confederate':
                        visible = militaryService.includes('confederate');
                        break;
                    case 'vmi':
                        visible = education.includes('virginia military institute') || education.includes('vmi');
                        break;
                }
            }
            
            // Date range filter
            if ((startYearValue || endYearValue) && visible) {
                const birthYear = parseInt(member.dates.split('-')[0]);
                const deathYear = member.dates.includes('-') ? 
                    (member.dates.split('-')[1] === 'present' ? new Date().getFullYear() : parseInt(member.dates.split('-')[1])) :
                    birthYear;
                
                if (startYearValue && birthYear < parseInt(startYearValue)) {
                    visible = false;
                }
                if (endYearValue && deathYear > parseInt(endYearValue)) {
                    visible = false;
                }
            }
            
            // Apply visibility and styling
            if (visible) {
                node.style.display = 'block';
                node.style.opacity = '1';
                if (searchTerm) {
                    node.style.background = 'var(--color-heritage-gold)';
                    node.style.color = 'var(--color-heritage-navy)';
                } else {
                    node.style.background = '';
                    node.style.color = '';
                }
                visibleCount++;
            } else {
                node.style.display = 'none';
            }
        });
        
        // Update search summary
        updateSearchSummary(visibleCount, totalCount, searchTerm, genFilter, occFilter, locFilter, milFilter, startYearValue, endYearValue);
        
        console.log('Advanced search performed:', {searchTerm, genFilter, occFilter, locFilter, milFilter, startYearValue, endYearValue});
    }
    
    // Update search summary
    function updateSearchSummary(visible, total, searchTerm, genFilter, occFilter, locFilter, milFilter, startYear, endYear) {
        let summary = `Showing ${visible} of ${total} family members`;
        const activeFilters = [];
        
        if (searchTerm) activeFilters.push(`search: "${searchTerm}"`);
        if (genFilter !== 'all') activeFilters.push(`generation: ${genFilter}`);
        if (occFilter !== 'all') activeFilters.push(`occupation: ${occFilter}`);
        if (locFilter !== 'all') activeFilters.push(`location: ${locFilter}`);
        if (milFilter !== 'all') activeFilters.push(`military: ${milFilter}`);
        if (startYear || endYear) {
            activeFilters.push(`years: ${startYear || 'start'}-${endYear || 'end'}`);
        }
        
        if (activeFilters.length > 0) {
            summary += ` (${activeFilters.join(', ')})`;
            searchSummary.style.display = 'block';
        } else {
            searchSummary.style.display = 'none';
        }
        
        searchSummary.textContent = summary;
    }
    
    // Attach event listeners
    familySearch.addEventListener('input', performSearch);
    generationFilter.addEventListener('change', performSearch);
    occupationFilter.addEventListener('change', performSearch);
    locationFilter.addEventListener('change', performSearch);
    militaryFilter.addEventListener('change', performSearch);
    startYear.addEventListener('input', performSearch);
    endYear.addEventListener('input', performSearch);
    
    // Clear filters
    clearFilters.addEventListener('click', function() {
        familySearch.value = '';
        generationFilter.value = 'all';
        occupationFilter.value = 'all';
        locationFilter.value = 'all';
        militaryFilter.value = 'all';
        startYear.value = '';
        endYear.value = '';
        performSearch();
    });
    
    // Initial search
    performSearch();
}

// Modal functionality
function initializeModal() {
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Enhanced modal with comprehensive profile information
function showMemberModal(memberId) {
    const member = familyData.familyMembers.find(m => m.id === memberId);
    const memberModal = document.getElementById('member-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!member || !memberModal || !modalBody) {
        console.error('Modal elements not found or member not found:', memberId);
        return;
    }

    modalBody.innerHTML = `
        <div class="member-profile-header">
            <div class="member-photo-container">
                <img src="images/family-members/${member.id}-${member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.jpg" 
                     alt="${member.name}" 
                     class="member-photo"
                     onerror="this.src='images/placeholder-portrait.jpg'; this.onerror=null;">
                <div class="photo-caption">Generation ${member.generation}</div>
            </div>
            <div class="member-basic-info">
                <h2>${member.name}</h2>
                <div class="dates" style="color: var(--color-heritage-gold); font-size: var(--font-size-lg); margin-bottom: var(--space-16);">${member.dates}</div>
                <div class="member-occupation">${member.occupation || 'Family Member'}</div>
            </div>
        </div>
        
        <div class="profile-section">
            <div class="profile-grid">
                <div class="profile-column">
                    <div style="margin-bottom: var(--space-16);">
                        <strong>Birth Place:</strong> ${member.birthPlace || 'Unknown'}
                    </div>
                    <div style="margin-bottom: var(--space-16);">
                        <strong>Education:</strong> ${member.education || 'Not specified'}
                    </div>
                    ${member.militaryService ? `
                        <div style="margin-bottom: var(--space-16);">
                            <strong>Military Service:</strong> ${member.militaryService}
                        </div>
                    ` : ''}
                </div>
                <div class="profile-column">
                    <div style="margin-bottom: var(--space-16);">
                        <strong>Spouse:</strong> ${member.spouse || 'Unknown'}
                    </div>
                    ${member.residences ? `
                        <div style="margin-bottom: var(--space-16);">
                            <strong>Residences:</strong> ${member.residences.join(', ')}
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
        
        ${member.children ? `
            <div style="margin-bottom: var(--space-16);">
                <strong>Children:</strong> ${Array.isArray(member.children) ? member.children.join(', ') : member.children}
            </div>
        ` : ''}
        
        <div style="margin-bottom: var(--space-20);">
            <strong>Biography:</strong>
            <p style="margin-top: var(--space-8); line-height: 1.6;">${member.biography}</p>
        </div>
        
        <div style="margin-bottom: var(--space-16);">
            <strong>Major Achievements:</strong>
            <ul style="margin-top: var(--space-8);">
                ${member.achievements ? member.achievements.map(achievement => `<li>${achievement}</li>`).join('') : '<li>Family member and contributor to Lewis legacy</li>'}
            </ul>
        </div>
        
        ${member.businessInterests ? `
            <div style="margin-bottom: var(--space-16);">
                <strong>Business Interests:</strong> ${member.businessInterests.join(', ')}
            </div>
        ` : ''}
        
        ${member.legacy ? `
            <div style="margin-bottom: var(--space-16); padding: var(--space-12); background: rgba(202, 144, 24, 0.1); border-radius: 8px;">
                <strong>Legacy:</strong> ${member.legacy}
            </div>
        ` : ''}
    `;

    memberModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    console.log('Enhanced modal opened for:', member.name);
}

// Global function for closing modal
function closeModal() {
    const memberModal = document.getElementById('member-modal');
    if (memberModal) {
        memberModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        console.log('Modal closed');
    }
}

// Animation on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe timeline items
    setTimeout(() => {
        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
        });
    }, 500);

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
}

// Relationship Mapping System
const relationshipMapper = {
    // Find all relationships for a given member
    findRelationships: function(memberId) {
        const member = familyData.familyMembers.find(m => m.id == memberId);
        if (!member) return {};

        const relationships = {
            member: member,
            spouse: this.findSpouse(member),
            children: this.findChildren(member),
            parents: this.findParents(member),
            siblings: this.findSiblings(member),
            grandparents: this.findGrandparents(member),
            grandchildren: this.findGrandchildren(member),
            auntsUncles: this.findAuntsUncles(member),
            cousins: this.findCousins(member)
        };

        return relationships;
    },

    // Find spouse of a member
    findSpouse: function(member) {
        if (!member.spouse || member.spouse === 'Single' || member.spouse === 'Never married') return null;
        
        // Try to find spouse by name match
        return familyData.familyMembers.find(m => 
            m.name === member.spouse.replace(/\s*\([^)]*\)/g, '').trim() ||
            m.spouse === member.name
        );
    },

    // Find children of a member
    findChildren: function(member) {
        if (!member.children || !Array.isArray(member.children)) return [];
        
        return member.children.map(childName => 
            familyData.familyMembers.find(m => m.name === childName)
        ).filter(Boolean);
    },

    // Find parents of a member
    findParents: function(member) {
        return familyData.familyMembers.filter(m => 
            m.children && Array.isArray(m.children) && m.children.includes(member.name)
        );
    },

    // Find siblings of a member
    findSiblings: function(member) {
        const parents = this.findParents(member);
        const siblings = [];
        
        parents.forEach(parent => {
            if (parent.children && Array.isArray(parent.children)) {
                parent.children.forEach(siblingName => {
                    if (siblingName !== member.name) {
                        const sibling = familyData.familyMembers.find(m => m.name === siblingName);
                        if (sibling && !siblings.find(s => s.id === sibling.id)) {
                            siblings.push(sibling);
                        }
                    }
                });
            }
        });
        
        return siblings;
    },

    // Find grandparents of a member
    findGrandparents: function(member) {
        const parents = this.findParents(member);
        const grandparents = [];
        
        parents.forEach(parent => {
            const parentParents = this.findParents(parent);
            parentParents.forEach(grandparent => {
                if (!grandparents.find(g => g.id === grandparent.id)) {
                    grandparents.push(grandparent);
                }
            });
        });
        
        return grandparents;
    },

    // Find grandchildren of a member
    findGrandchildren: function(member) {
        const children = this.findChildren(member);
        const grandchildren = [];
        
        children.forEach(child => {
            const childChildren = this.findChildren(child);
            grandchildren.push(...childChildren);
        });
        
        return grandchildren;
    },

    // Find aunts and uncles of a member
    findAuntsUncles: function(member) {
        const parents = this.findParents(member);
        const auntsUncles = [];
        
        parents.forEach(parent => {
            const parentSiblings = this.findSiblings(parent);
            auntsUncles.push(...parentSiblings);
        });
        
        return auntsUncles.filter((au, index, self) => 
            index === self.findIndex(t => t.id === au.id)
        );
    },

    // Find cousins of a member
    findCousins: function(member) {
        const auntsUncles = this.findAuntsUncles(member);
        const cousins = [];
        
        auntsUncles.forEach(auntUncle => {
            const auntUncleChildren = this.findChildren(auntUncle);
            cousins.push(...auntUncleChildren);
        });
        
        return cousins;
    },

    // Generate relationship description
    getRelationshipDescription: function(fromMember, toMember) {
        if (fromMember.id === toMember.id) return "Self";
        
        const relationships = this.findRelationships(fromMember.id);
        
        if (relationships.spouse && relationships.spouse.id === toMember.id) {
            return "Spouse";
        }
        
        if (relationships.children.find(c => c.id === toMember.id)) {
            return "Child";
        }
        
        if (relationships.parents.find(p => p.id === toMember.id)) {
            return "Parent";
        }
        
        if (relationships.siblings.find(s => s.id === toMember.id)) {
            return "Sibling";
        }
        
        if (relationships.grandparents.find(g => g.id === toMember.id)) {
            return "Grandparent";
        }
        
        if (relationships.grandchildren.find(g => g.id === toMember.id)) {
            return "Grandchild";
        }
        
        if (relationships.auntsUncles.find(au => au.id === toMember.id)) {
            return "Aunt/Uncle";
        }
        
        if (relationships.cousins.find(c => c.id === toMember.id)) {
            return "Cousin";
        }
        
        // Check for generation relationships
        const generationDiff = toMember.generation - fromMember.generation;
        if (generationDiff > 0) {
            return `${generationDiff} generation${generationDiff > 1 ? 's' : ''} younger`;
        } else if (generationDiff < 0) {
            return `${Math.abs(generationDiff)} generation${Math.abs(generationDiff) > 1 ? 's' : ''} older`;
        }
        
        return "Family member";
    },

    // Build complete family network
    buildFamilyNetwork: function() {
        const network = {};
        
        familyData.familyMembers.forEach(member => {
            network[member.id] = this.findRelationships(member.id);
        });
        
        return network;
    }
};

// Enhanced modal with relationship information
function showMemberModalWithRelationships(memberId) {
    const member = familyData.familyMembers.find(m => m.id === memberId);
    const memberModal = document.getElementById('member-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!member || !memberModal || !modalBody) {
        console.error('Modal elements not found or member not found:', memberId);
        return;
    }

    const relationships = relationshipMapper.findRelationships(memberId);

    modalBody.innerHTML = `
        <div class="member-profile-header">
            <div class="member-photo-container">
                <img src="images/family-members/${member.id}-${member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.jpg" 
                     alt="${member.name}" 
                     class="member-photo"
                     onerror="this.src='images/placeholder-portrait.jpg'; this.onerror=null;">
                <div class="photo-caption">Generation ${member.generation}</div>
            </div>
            <div class="member-basic-info">
                <h2>${member.name}</h2>
                <div class="dates" style="color: var(--color-heritage-gold); font-size: var(--font-size-lg); margin-bottom: var(--space-16);">${member.dates}</div>
                <div class="member-occupation">${member.occupation || 'Family Member'}</div>
            </div>
        </div>
        
        <!-- Enhanced Relationship Map with Lineage Views -->
        <div class="relationship-section">
            <div class="relationship-tabs">
                <button class="relationship-tab active" data-tab="immediate" onclick="switchRelationshipTab('immediate', ${memberId})">Immediate Family</button>
                <button class="relationship-tab" data-tab="ancestors" onclick="switchRelationshipTab('ancestors', ${memberId})">Ancestors</button>
                <button class="relationship-tab" data-tab="descendants" onclick="switchRelationshipTab('descendants', ${memberId})">Descendants</button>
                <button class="relationship-tab" data-tab="lineage" onclick="switchRelationshipTab('lineage', ${memberId})">Family Tree</button>
            </div>
            
            <div class="relationship-content">
                <div class="relationship-tab-content active" id="immediate-content">
                    <h4>Immediate Family Connections</h4>
                    <div class="relationship-grid">
                ${relationships.spouse ? `
                    <div class="relationship-item spouse" onclick="showMemberModalWithRelationships(${relationships.spouse.id})">
                        <div class="relationship-type">Spouse</div>
                        <div class="relationship-name">${relationships.spouse.name}</div>
                        <div class="relationship-dates">${relationships.spouse.dates}</div>
                    </div>
                ` : ''}
                
                ${relationships.parents.length > 0 ? `
                    <div class="relationship-category">
                        <div class="category-title">Parents</div>
                        ${relationships.parents.map(parent => `
                            <div class="relationship-item parent" onclick="showMemberModalWithRelationships(${parent.id})">
                                <div class="relationship-name">${parent.name}</div>
                                <div class="relationship-dates">${parent.dates}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${relationships.children.length > 0 ? `
                    <div class="relationship-category">
                        <div class="category-title">Children</div>
                        ${relationships.children.map(child => `
                            <div class="relationship-item child" onclick="showMemberModalWithRelationships(${child.id})">
                                <div class="relationship-name">${child.name}</div>
                                <div class="relationship-dates">${child.dates}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${relationships.siblings.length > 0 ? `
                    <div class="relationship-category">
                        <div class="category-title">Siblings</div>
                        ${relationships.siblings.map(sibling => `
                            <div class="relationship-item sibling" onclick="showMemberModalWithRelationships(${sibling.id})">
                                <div class="relationship-name">${sibling.name}</div>
                                <div class="relationship-dates">${sibling.dates}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${relationships.grandparents.length > 0 ? `
                    <div class="relationship-category">
                        <div class="category-title">Grandparents</div>
                        ${relationships.grandparents.map(grandparent => `
                            <div class="relationship-item grandparent" onclick="showMemberModalWithRelationships(${grandparent.id})">
                                <div class="relationship-name">${grandparent.name}</div>
                                <div class="relationship-dates">${grandparent.dates}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${relationships.grandchildren.length > 0 ? `
                    <div class="relationship-category">
                        <div class="category-title">Grandchildren</div>
                        ${relationships.grandchildren.map(grandchild => `
                            <div class="relationship-item grandchild" onclick="showMemberModalWithRelationships(${grandchild.id})">
                                <div class="relationship-name">${grandchild.name}</div>
                                <div class="relationship-dates">${grandchild.dates}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
        
        <div class="profile-section">
            <div class="profile-grid">
                <div class="profile-column">
                    <div style="margin-bottom: var(--space-16);">
                        <strong>Birth Place:</strong> ${member.birthPlace || 'Unknown'}
                    </div>
                    <div style="margin-bottom: var(--space-16);">
                        <strong>Education:</strong> ${member.education || 'Not specified'}
                    </div>
                    ${member.militaryService ? `
                        <div style="margin-bottom: var(--space-16);">
                            <strong>Military Service:</strong> ${member.militaryService}
                        </div>
                    ` : ''}
                </div>
                <div class="profile-column">
                    ${member.residences ? `
                        <div style="margin-bottom: var(--space-16);">
                            <strong>Residences:</strong> ${member.residences.join(', ')}
                        </div>
                    ` : ''}
                    ${member.businessInterests ? `
                        <div style="margin-bottom: var(--space-16);">
                            <strong>Business Interests:</strong> ${member.businessInterests.join(', ')}
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: var(--space-20);">
            <strong>Biography:</strong>
            <p style="margin-top: var(--space-8); line-height: 1.6;">${member.biography}</p>
        </div>
        
        <div style="margin-bottom: var(--space-16);">
            <strong>Major Achievements:</strong>
            <ul style="margin-top: var(--space-8);">
                ${member.achievements ? member.achievements.map(achievement => `<li>${achievement}</li>`).join('') : '<li>Family member and contributor to Lewis legacy</li>'}
            </ul>
        </div>
        
        ${member.legacy ? `
            <div style="margin-bottom: var(--space-16); padding: var(--space-12); background: rgba(202, 144, 24, 0.1); border-radius: 8px;">
                <strong>Legacy:</strong> ${member.legacy}
            </div>
        ` : ''}
        
        <!-- Navigation to Related Members -->
        <div class="member-navigation">
            <div class="navigation-buttons">
                <button class="btn btn--outline" onclick="showAncestorTree(${member.id})">View Ancestors</button>
                <button class="btn btn--outline" onclick="showDescendantTree(${member.id})">View Descendants</button>
                <button class="btn btn--outline" onclick="showFamilyBranch(${member.id})">View Family Branch</button>
            </div>
        </div>
    `;

    memberModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    console.log('Enhanced modal with relationships opened for:', member.name);
}

// Replace the original showMemberModal function
function showMemberModal(memberId) {
    showMemberModalWithRelationships(memberId);
}

// Migration Map Implementation
function initializeMigrationMap() {
    console.log('Initializing migration map...');
    renderMigrationMap('all');
    initializePeriodControls();
}

function initializePeriodControls() {
    const periodButtons = document.querySelectorAll('.period-btn');
    
    periodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const period = this.dataset.period;
            
            // Update active button
            periodButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Render map for selected period
            renderMigrationMap(period);
            
            console.log('Period filter applied:', period);
        });
    });
}

function renderMigrationMap(period = 'all') {
    const mapContainer = document.getElementById('interactive-map');
    const legendContainer = document.getElementById('legend-items');
    const detailsContainer = document.getElementById('migration-details');
    
    if (!mapContainer || !legendContainer || !detailsContainer) return;

    // Create SVG map
    const svg = createSVGMap();
    mapContainer.innerHTML = '';
    mapContainer.appendChild(svg);
    
    // Render legend
    renderMapLegend(legendContainer, period);
    
    // Update details panel
    updateDetailsPanel(detailsContainer, null, period);
    
    console.log('Migration map rendered for period:', period);
}

function createSVGMap() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 800 500');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    
    // Create simplified state shapes and positions
    const stateData = {
        virginia: { path: 'M650 120 L750 120 L750 180 L650 180 Z', x: 700, y: 150 },
        'north-carolina': { path: 'M600 180 L750 180 L750 220 L600 220 Z', x: 675, y: 200 },
        'south-carolina': { path: 'M600 220 L700 220 L700 280 L600 280 Z', x: 650, y: 250 },
        georgia: { path: 'M580 280 L680 280 L680 360 L580 360 Z', x: 630, y: 320 },
        florida: { path: 'M600 360 L700 360 L700 480 L680 480 L680 440 L620 440 L600 420 Z', x: 650, y: 420 },
        tallahassee: { x: 620, y: 400 }
    };
    
    // Add states
    Object.entries(familyData.locationData.states).forEach(([key, state]) => {
        if (key === 'tallahassee') return; // Handle separately as marker
        
        const stateElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        stateElement.setAttribute('d', stateData[key].path);
        stateElement.setAttribute('fill', state.color);
        stateElement.classList.add('map-state');
        stateElement.setAttribute('data-state', key);
        stateElement.addEventListener('click', () => selectLocation(key));
        svg.appendChild(stateElement);
        
        // Add state label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', stateData[key].x);
        label.setAttribute('y', stateData[key].y);
        label.classList.add('location-label');
        label.textContent = state.name.split(' ')[0]; // First word only for space
        svg.appendChild(label);
    });
    
    // Add Tallahassee marker
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    marker.setAttribute('cx', stateData.tallahassee.x);
    marker.setAttribute('cy', stateData.tallahassee.y);
    marker.setAttribute('r', 8);
    marker.classList.add('location-marker');
    marker.setAttribute('data-location', 'tallahassee');
    marker.addEventListener('click', () => selectLocation('tallahassee'));
    svg.appendChild(marker);
    
    // Add Tallahassee label
    const tallahasseeLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    tallahasseeLabel.setAttribute('x', stateData.tallahassee.x);
    tallahasseeLabel.setAttribute('y', stateData.tallahassee.y - 15);
    tallahasseeLabel.classList.add('location-label');
    tallahasseeLabel.textContent = 'Tallahassee';
    svg.appendChild(tallahasseeLabel);
    
    // Add migration paths
    addMigrationPaths(svg, stateData);
    
    return svg;
}

function addMigrationPaths(svg, stateData) {
    // Early migration path (Virginia -> NC -> SC -> GA)
    const earlyPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const earlyPathData = `M ${stateData.virginia.x} ${stateData.virginia.y + 20} 
                          L ${stateData['north-carolina'].x} ${stateData['north-carolina'].y} 
                          L ${stateData['south-carolina'].x} ${stateData['south-carolina'].y} 
                          L ${stateData.georgia.x} ${stateData.georgia.y}`;
    earlyPath.setAttribute('d', earlyPathData);
    earlyPath.classList.add('migration-path');
    earlyPath.setAttribute('data-period', 'early');
    svg.appendChild(earlyPath);
    
    // Settlement path (Virginia -> Tallahassee)
    const settlementPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const settlementPathData = `M ${stateData.virginia.x - 20} ${stateData.virginia.y + 40} 
                               Q 400 300 ${stateData.tallahassee.x} ${stateData.tallahassee.y}`;
    settlementPath.setAttribute('d', settlementPathData);
    settlementPath.classList.add('migration-path');
    settlementPath.setAttribute('data-period', 'settlement');
    svg.appendChild(settlementPath);
}

function renderMapLegend(container, period) {
    const legendData = [
        { type: 'color', color: '#8B4513', label: 'Virginia (1785-1836)' },
        { type: 'color', color: '#CD853F', label: 'North Carolina' },
        { type: 'color', color: '#D2691E', label: 'South Carolina' },
        { type: 'color', color: '#DEB887', label: 'Georgia' },
        { type: 'color', color: '#F4A460', label: 'Florida (1836)' },
        { type: 'line', color: '#CA9018', label: 'Migration Routes' }
    ];
    
    container.innerHTML = '';
    
    legendData.forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');
        
        const colorElement = document.createElement('div');
        colorElement.style.backgroundColor = item.color;
        
        if (item.type === 'line') {
            colorElement.classList.add('legend-line');
        } else {
            colorElement.classList.add('legend-color');
        }
        
        const label = document.createElement('span');
        label.textContent = item.label;
        
        legendItem.appendChild(colorElement);
        legendItem.appendChild(label);
        container.appendChild(legendItem);
    });
}

function selectLocation(locationKey) {
    console.log('Location selected:', locationKey);
    
    // Update map visual state
    const mapStates = document.querySelectorAll('.map-state, .location-marker');
    mapStates.forEach(state => state.classList.remove('active'));
    
    const selectedElement = document.querySelector(`[data-state="${locationKey}"], [data-location="${locationKey}"]`);
    if (selectedElement) {
        selectedElement.classList.add('active');
    }
    
    // Update details panel
    const detailsContainer = document.getElementById('migration-details');
    updateDetailsPanel(detailsContainer, locationKey);
}

function updateDetailsPanel(container, locationKey = null, period = 'all') {
    if (!container) return;
    
    if (!locationKey) {
        // Default state
        container.innerHTML = `
            <div class="location-info">
                <h3>Lewis Family Migration (1785-2025)</h3>
                <p>Explore 240 years of family movement across the southeastern United States. Click on any state or location to learn more about the Lewis family presence in that region.</p>
                <div class="migration-overview">
                    <h4>Migration Summary</h4>
                    <div class="timeline-entry">
                        <strong>1785-1830:</strong> Early family ancestors migrate southward from Virginia through the Carolinas to Georgia
                    </div>
                    <div class="timeline-entry">
                        <strong>1836:</strong> Benjamin Cheever Lewis establishes family presence in territorial Florida
                    </div>
                    <div class="timeline-entry">
                        <strong>1836-2025:</strong> Seven continuous generations in Tallahassee, Florida
                    </div>
                </div>
            </div>
        `;
        return;
    }
    
    const locationInfo = getLocationInfo(locationKey);
    container.innerHTML = `
        <div class="location-info">
            <h3>${locationInfo.name}</h3>
            <p>${locationInfo.description}</p>
            
            ${locationInfo.timeline.length > 0 ? `
                <div class="location-timeline">
                    <h4>Family Timeline</h4>
                    ${locationInfo.timeline.map(entry => `
                        <div class="timeline-entry">
                            <strong>${entry.year}:</strong> ${entry.event}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${locationInfo.familyMembers.length > 0 ? `
                <div class="family-connection">
                    <h4>Family Members Connected to This Location</h4>
                    ${locationInfo.familyMembers.map(member => `
                        <a href="#" class="family-member-link" onclick="showMemberModalWithRelationships(${member.id}); return false;">
                            ${member.name}
                        </a>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

function getLocationInfo(locationKey) {
    const locationData = {
        virginia: {
            name: 'Virginia',
            description: 'Birthplace of Benjamin Cheever Lewis and ancestral home of the Lewis family. Virginia\'s role as the original commonwealth provided the foundation for the family\'s later success in territorial Florida.',
            timeline: [
                { year: '1804', event: 'Benjamin Cheever Lewis born in Virginia' },
                { year: '1785-1830', event: 'Early Lewis ancestors begin southward migration' },
                { year: '1836', event: 'Benjamin C. Lewis leaves Virginia for Florida territory' }
            ],
            familyMembers: familyData.familyMembers.filter(m => 
                m.birthPlace === 'Virginia' || 
                (m.residences && m.residences.some(r => r.includes('Virginia')))
            )
        },
        'north-carolina': {
            name: 'North Carolina',
            description: 'Part of the early southward migration route taken by Lewis family ancestors in the late 18th and early 19th centuries.',
            timeline: [
                { year: '1785-1830', event: 'Family ancestors pass through during southward migration' }
            ],
            familyMembers: []
        },
        'south-carolina': {
            name: 'South Carolina',
            description: 'Another key state in the early Lewis family migration pattern as they moved from Virginia toward Georgia and eventually Florida.',
            timeline: [
                { year: '1785-1830', event: 'Family ancestors continue southward journey' }
            ],
            familyMembers: []
        },
        georgia: {
            name: 'Georgia',
            description: 'The final stop before Florida in the Lewis family\'s southward migration, representing the last connection to the old southeastern settlements.',
            timeline: [
                { year: '1785-1830', event: 'Family ancestors reach Georgia before final move to Florida' }
            ],
            familyMembers: []
        },
        florida: {
            name: 'Florida',
            description: 'The Lewis family\'s permanent home since 1836. What began as territorial settlement became 189 years of continuous family presence in Florida\'s capital city.',
            timeline: [
                { year: '1836', event: 'Benjamin C. Lewis establishes family in territorial Florida' },
                { year: '1845', event: 'Florida achieves statehood with Lewis family as established residents' },
                { year: '1856', event: 'Lewis State Bank founded - Florida\'s oldest bank' },
                { year: '1950s-present', event: 'Family continues civic and business leadership' }
            ],
            familyMembers: familyData.familyMembers.filter(m => 
                m.birthPlace === 'Tallahassee, Florida' || 
                (m.residences && m.residences.some(r => r.includes('Florida') || r.includes('Tallahassee')))
            )
        },
        tallahassee: {
            name: 'Tallahassee, Florida',
            description: 'The heart of the Lewis family legacy. Since Benjamin Cheever Lewis\'s arrival in 1836, seven generations have called Tallahassee home, contributing to banking, law, civil rights, environmental conservation, and the arts.',
            timeline: [
                { year: '1836', event: 'Benjamin C. Lewis establishes druggist shop' },
                { year: '1850', event: 'B.C. Lewis House built on Park Avenue' },
                { year: '1856', event: 'Lewis State Bank founded' },
                { year: '1954', event: 'Frank Lloyd Wright Lewis Spring House completed' },
                { year: '1960s', event: 'LeMoyne Center for Visual Arts co-founded' },
                { year: '1985', event: 'Lewis State Bank ends 129 years of family operation' },
                { year: '2025', event: 'Family legacy continues with seventh generation' }
            ],
            familyMembers: familyData.familyMembers.filter(m => 
                m.birthPlace === 'Tallahassee, Florida' || 
                (m.residences && m.residences.some(r => r.includes('Tallahassee'))) ||
                m.generation > 1 // Most family members after Benjamin lived in Tallahassee
            )
        }
    };
    
    return locationData[locationKey] || {
        name: 'Unknown Location',
        description: 'No information available for this location.',
        timeline: [],
        familyMembers: []
    };
}

// Historical Context Implementation
function initializeHistoricalContext() {
    console.log('Initializing historical context...');
    initializeTimelineViewControls();
    renderHistoricalContext();
}

function initializeTimelineViewControls() {
    const viewButtons = document.querySelectorAll('.timeline-view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const view = this.dataset.view;
            
            // Update active button
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Switch timeline view
            switchTimelineView(view);
            
            console.log('Timeline view switched to:', view);
        });
    });
}

function switchTimelineView(view) {
    const timelineContainer = document.getElementById('timeline-container');
    const contextContainer = document.getElementById('historical-context-container');
    
    switch (view) {
        case 'family':
            timelineContainer.style.display = 'block';
            contextContainer.style.display = 'none';
            renderTimeline(); // Render original family timeline
            break;
        case 'historical':
            timelineContainer.style.display = 'none';
            contextContainer.style.display = 'block';
            renderHistoricalContext();
            break;
        case 'combined':
            timelineContainer.style.display = 'block';
            contextContainer.style.display = 'none';
            renderCombinedTimeline();
            break;
    }
}

function renderHistoricalContext() {
    const contextContainer = document.getElementById('historical-context-container');
    if (!contextContainer) return;
    
    let contextHTML = '';
    
    familyData.historicalContext.periods.forEach((period, index) => {
        contextHTML += `
            <div class="context-period" style="animation-delay: ${index * 0.1}s">
                <div class="context-period-header" onclick="toggleContextPeriod(${index})">
                    <div class="context-period-info">
                        <h3 class="context-period-title">${period.name}</h3>
                        <div class="context-period-dates">${period.dateRange}</div>
                    </div>
                    <button class="context-toggle" id="toggle-${index}">▼</button>
                </div>
                <div class="context-period-content" id="content-${index}">
                    <p class="context-description">${period.description}</p>
                    
                    <div class="context-events-grid">
                        <div class="context-events-section national-events">
                            <h4>National & Global Events</h4>
                            <ul class="context-events-list">
                                ${period.nationalEvents.map(event => `<li>${event}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="context-events-section family-events">
                            <h4>Lewis Family Events</h4>
                            <ul class="context-events-list">
                                ${period.familyEvents.map(event => `<li>${event}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="context-significance">
                        <strong>Historical Significance:</strong> ${period.significance}
                    </div>
                </div>
            </div>
        `;
    });
    
    contextContainer.innerHTML = contextHTML;
    console.log('Historical context rendered');
}

function toggleContextPeriod(index) {
    const content = document.getElementById(`content-${index}`);
    const toggle = document.getElementById(`toggle-${index}`);
    
    if (content && toggle) {
        const isExpanded = content.classList.contains('expanded');
        
        if (isExpanded) {
            content.classList.remove('expanded');
            toggle.classList.remove('expanded');
        } else {
            content.classList.add('expanded');
            toggle.classList.add('expanded');
        }
    }
}

function renderCombinedTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;
    
    // Create combined timeline with both family and national events
    const combinedEvents = [];
    
    // Add family events
    familyData.timeline.forEach(item => {
        combinedEvents.push({
            year: item.year,
            event: item.event,
            type: 'family'
        });
    });
    
    // Add major national events from historical context
    const majorNationalEvents = [
        { year: 1821, event: 'Florida Territory established', type: 'national' },
        { year: 1845, event: 'Florida becomes 27th state', type: 'national' },
        { year: 1861, event: 'Civil War begins', type: 'national' },
        { year: 1865, event: 'Civil War ends, Reconstruction begins', type: 'national' },
        { year: 1898, event: 'Spanish-American War', type: 'national' },
        { year: 1917, event: 'United States enters World War I', type: 'national' },
        { year: 1929, event: 'Stock Market Crash, Great Depression begins', type: 'national' },
        { year: 1941, event: 'United States enters World War II', type: 'national' },
        { year: 1964, event: 'Civil Rights Act passed', type: 'national' },
        { year: 1989, event: 'End of Cold War', type: 'national' }
    ];
    
    majorNationalEvents.forEach(event => {
        combinedEvents.push(event);
    });
    
    // Sort by year
    combinedEvents.sort((a, b) => a.year - b.year);
    
    let timelineHTML = '';
    
    combinedEvents.forEach((item, index) => {
        timelineHTML += `
            <div class="combined-timeline-item ${item.type}-event" style="animation-delay: ${index * 0.05}s">
                <div class="timeline-item-type ${item.type}">${item.type === 'family' ? 'Family' : 'National'}</div>
                <div class="timeline-item-year">${item.year}</div>
                <div class="timeline-item-content">${item.event}</div>
            </div>
        `;
    });
    
    timelineContainer.innerHTML = timelineHTML;
    
    // Animate items
    setTimeout(() => {
        document.querySelectorAll('.combined-timeline-item').forEach(item => {
            item.classList.add('visible');
        });
    }, 100);
    
    console.log('Combined timeline rendered');
}

// Enhanced timeline rendering with context integration
function renderTimelineWithContext() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;
    
    let timelineHTML = '';
    
    familyData.timeline.forEach((item, index) => {
        // Find matching historical context
        const contextPeriod = findContextPeriodForYear(item.year);
        const contextNote = contextPeriod ? ` (During ${contextPeriod.name})` : '';
        
        timelineHTML += `
            <div class="timeline-item enhanced-timeline-item" style="animation-delay: ${index * 0.1}s" data-year="${item.year}">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-content">
                    <p>${item.event}</p>
                    ${contextNote ? `<div class="context-note">${contextNote}</div>` : ''}
                </div>
            </div>
        `;
    });
    
    timelineContainer.innerHTML = timelineHTML;
    console.log('Enhanced timeline with context rendered');
}

function findContextPeriodForYear(year) {
    return familyData.historicalContext.periods.find(period => {
        const [startYear, endYear] = period.dateRange.split('-').map(y => {
            const cleanYear = y.trim().replace('present', '2025');
            return parseInt(cleanYear);
        });
        return year >= startYear && year <= endYear;
    });
}

// Add context tooltips to timeline items
function addContextTooltips() {
    const timelineItems = document.querySelectorAll('.timeline-item[data-year]');
    
    timelineItems.forEach(item => {
        const year = parseInt(item.dataset.year);
        const contextPeriod = findContextPeriodForYear(year);
        
        if (contextPeriod) {
            item.setAttribute('title', `${contextPeriod.name} (${contextPeriod.dateRange}): ${contextPeriod.description}`);
            item.style.cursor = 'help';
        }
    });
}

// Photo Galleries Implementation
function initializePhotoGalleries() {
    console.log('Initializing photo galleries...');
    initializeGalleryViewControls();
    renderPhotoGalleries('periods');
    initializePhotoModal();
}

function initializeGalleryViewControls() {
    const viewButtons = document.querySelectorAll('.gallery-view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const view = this.dataset.view;
            
            // Update active button
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Switch gallery view
            renderPhotoGalleries(view);
            
            console.log('Gallery view switched to:', view);
        });
    });
}

function renderPhotoGalleries(view) {
    const galleryContainer = document.getElementById('photo-gallery-container');
    const filtersContainer = document.getElementById('gallery-filters');
    
    if (!galleryContainer) return;
    
    // Clear existing content
    galleryContainer.innerHTML = '';
    filtersContainer.innerHTML = '';
    
    switch (view) {
        case 'periods':
            renderTimePeriodsGallery(galleryContainer);
            break;
        case 'branches':
            renderFamilyBranchesGallery(galleryContainer);
            break;
        case 'properties':
            renderPropertiesGallery(galleryContainer);
            break;
    }
}

function renderTimePeriodsGallery(container) {
    let galleryHTML = '';
    
    familyData.photoGalleries.timePeriods.forEach((period, index) => {
        galleryHTML += `
            <div class="gallery-section" style="animation-delay: ${index * 0.1}s">
                <div class="gallery-section-header">
                    <h3 class="gallery-section-title">${period.name}</h3>
                    <div class="gallery-section-dates">${period.dateRange}</div>
                    <p class="gallery-section-description">${period.description}</p>
                </div>
                <div class="gallery-grid">
                    ${period.photos.map(photo => createPhotoCard(photo)).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = galleryHTML;
    console.log('Time periods gallery rendered');
}

function renderFamilyBranchesGallery(container) {
    let galleryHTML = '';
    
    familyData.photoGalleries.familyBranches.forEach((branch, index) => {
        // Get photos for this branch's key members
        const branchPhotos = getAllPhotosForMembers(branch.keyMembers);
        
        galleryHTML += `
            <div class="branch-gallery" style="animation-delay: ${index * 0.1}s">
                <div class="branch-header">
                    <h3 class="branch-name">${branch.name}</h3>
                    <p class="branch-description">${branch.description}</p>
                </div>
                <div class="gallery-grid">
                    ${branchPhotos.map(photo => createPhotoCard(photo)).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = galleryHTML;
    console.log('Family branches gallery rendered');
}

function renderPropertiesGallery(container) {
    let galleryHTML = `
        <div class="property-gallery-grid">
            ${familyData.photoGalleries.properties.map(property => `
                <div class="property-card" onclick="openPhotoModal('${property.filename}', ${JSON.stringify(property).replace(/"/g, '&quot;')})">
                    <div class="property-image-container">
                        ${checkImageExists(property.filename) ? 
                            `<img src="images/properties/${property.filename}" alt="${property.name}" class="property-image" onerror="this.parentElement.innerHTML='${createPlaceholder(property.name, 'Property')}'">` :
                            createPlaceholder(property.name, 'Property')
                        }
                    </div>
                    <div class="property-info">
                        <h3 class="property-name">${property.name}</h3>
                        <p class="property-description">${property.description}</p>
                        <div class="property-significance">
                            <strong>Significance:</strong> ${property.significance}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    container.innerHTML = galleryHTML;
    console.log('Properties gallery rendered');
}

function createPhotoCard(photo) {
    const imagePath = photo.type === 'property' ? 
        `images/properties/${photo.filename}` : 
        `images/family-members/${photo.filename}`;
    
    return `
        <div class="photo-card" onclick="openPhotoModal('${photo.id}', ${JSON.stringify(photo).replace(/"/g, '&quot;')})">
            <div class="photo-image-container">
                <div class="photo-type-badge">${photo.type}</div>
                ${checkImageExists(photo.filename) ? 
                    `<img src="${imagePath}" alt="${photo.title}" class="photo-image" onerror="this.parentElement.innerHTML='${createPlaceholder(photo.title, photo.type)}'">` :
                    createPlaceholder(photo.title, photo.type)
                }
            </div>
            <div class="photo-info">
                <h4 class="photo-title">${photo.title}</h4>
                <div class="photo-year">${photo.year}</div>
                <p class="photo-description">${photo.description}</p>
                <div class="photo-location">${photo.location}</div>
            </div>
        </div>
    `;
}

function createPlaceholder(title, type) {
    const icon = type === 'portrait' ? '👤' : type === 'property' ? '🏛️' : '📷';
    return `
        <div class="photo-placeholder">
            <div class="photo-placeholder-icon">${icon}</div>
            <div>Photo of ${title}</div>
            <small>Image coming soon</small>
        </div>
    `;
}

function checkImageExists(filename) {
    // For now, return false to show placeholders
    // In a real implementation, you could use fetch or img.onload to check
    return false;
}

function getAllPhotosForMembers(memberIds) {
    const allPhotos = [];
    
    // Collect all photos from all time periods
    familyData.photoGalleries.timePeriods.forEach(period => {
        period.photos.forEach(photo => {
            // Check if photo subjects match any of the member IDs
            const memberNames = memberIds.map(id => {
                const member = familyData.familyMembers.find(m => m.id === id);
                return member ? member.name : '';
            }).filter(name => name);
            
            const hasMatchingSubject = photo.subjects.some(subject => 
                memberNames.some(name => subject.includes(name))
            );
            
            if (hasMatchingSubject) {
                allPhotos.push(photo);
            }
        });
    });
    
    return allPhotos;
}

// Photo Modal Implementation
let currentPhotoIndex = 0;
let currentPhotoSet = [];

function initializePhotoModal() {
    const modalClose = document.querySelector('.photo-modal-close');
    const modalOverlay = document.querySelector('.photo-modal-overlay');
    const prevBtn = document.getElementById('photo-prev');
    const nextBtn = document.getElementById('photo-next');
    
    if (modalClose) {
        modalClose.addEventListener('click', closePhotoModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closePhotoModal);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', showPreviousPhoto);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextPhoto);
    }
    
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('photo-modal');
        if (modal && !modal.classList.contains('hidden')) {
            if (e.key === 'Escape') {
                closePhotoModal();
            } else if (e.key === 'ArrowLeft') {
                showPreviousPhoto();
            } else if (e.key === 'ArrowRight') {
                showNextPhoto();
            }
        }
    });
}

function openPhotoModal(photoId, photoData = null) {
    const modal = document.getElementById('photo-modal');
    const modalBody = document.getElementById('photo-modal-body');
    
    if (!modal || !modalBody) return;
    
    let photo;
    if (photoData && typeof photoData === 'object') {
        photo = photoData;
    } else {
        // Find photo in data structure
        photo = findPhotoById(photoId);
    }
    
    if (!photo) return;
    
    // Set up current photo set for navigation
    setupPhotoSet(photo);
    
    renderPhotoModal(photo);
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    console.log('Photo modal opened for:', photo.title);
}

function findPhotoById(photoId) {
    // Search through all time periods
    for (const period of familyData.photoGalleries.timePeriods) {
        const photo = period.photos.find(p => p.id === photoId);
        if (photo) return photo;
    }
    
    // Search properties
    const property = familyData.photoGalleries.properties.find(p => p.filename === photoId);
    if (property) {
        return {
            id: property.filename,
            filename: property.filename,
            title: property.name,
            description: property.description,
            location: property.location,
            type: 'property',
            subjects: [property.name],
            year: 'Historic'
        };
    }
    
    return null;
}

function setupPhotoSet(currentPhoto) {
    // Get all photos from current context
    currentPhotoSet = [];
    
    // Add all photos from time periods
    familyData.photoGalleries.timePeriods.forEach(period => {
        currentPhotoSet.push(...period.photos);
    });
    
    // Add property photos
    familyData.photoGalleries.properties.forEach(property => {
        currentPhotoSet.push({
            id: property.filename,
            filename: property.filename,
            title: property.name,
            description: property.description,
            location: property.location,
            type: 'property',
            subjects: [property.name],
            year: 'Historic'
        });
    });
    
    currentPhotoIndex = currentPhotoSet.findIndex(p => 
        p.id === currentPhoto.id || p.filename === currentPhoto.filename
    );
}

function renderPhotoModal(photo) {
    const modalBody = document.getElementById('photo-modal-body');
    if (!modalBody) return;
    
    const imagePath = photo.type === 'property' ? 
        `images/properties/${photo.filename}` : 
        `images/family-members/${photo.filename}`;
    
    modalBody.innerHTML = `
        <div class="photo-modal-image-container">
            ${checkImageExists(photo.filename) ? 
                `<img src="${imagePath}" alt="${photo.title}" class="photo-modal-image">` :
                `<div class="photo-placeholder" style="min-height: 400px;">${createPlaceholder(photo.title, photo.type)}</div>`
            }
        </div>
        <div class="photo-modal-info">
            <h2 class="photo-modal-title">${photo.title}</h2>
            <div class="photo-modal-meta">
                <span class="photo-modal-year">Year: ${photo.year}</span>
                <span class="photo-modal-location">Location: ${photo.location}</span>
                <span class="photo-modal-type">Type: ${photo.type}</span>
            </div>
            <p class="photo-modal-description">${photo.description}</p>
            ${photo.subjects && photo.subjects.length > 0 ? `
                <div class="photo-modal-subjects">
                    <h4>Featured:</h4>
                    ${photo.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `;
    
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('photo-prev');
    const nextBtn = document.getElementById('photo-next');
    
    if (prevBtn) {
        prevBtn.disabled = currentPhotoIndex <= 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentPhotoIndex >= currentPhotoSet.length - 1;
    }
}

function showPreviousPhoto() {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        const photo = currentPhotoSet[currentPhotoIndex];
        renderPhotoModal(photo);
    }
}

function showNextPhoto() {
    if (currentPhotoIndex < currentPhotoSet.length - 1) {
        currentPhotoIndex++;
        const photo = currentPhotoSet[currentPhotoIndex];
        renderPhotoModal(photo);
    }
}

function closePhotoModal() {
    const modal = document.getElementById('photo-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        console.log('Photo modal closed');
    }
}

// Global functions for photo modal
window.openPhotoModal = openPhotoModal;
window.closePhotoModal = closePhotoModal;

// Global function for toggling context periods
window.toggleContextPeriod = toggleContextPeriod;

// Make functions globally available
window.showMemberModal = showMemberModal;
window.showMemberModalWithRelationships = showMemberModalWithRelationships;
window.relationshipMapper = relationshipMapper;
window.closeModal = closeModal;

console.log('Enhanced JavaScript with relationship mapping loaded successfully');