// ---- EDIT THIS DATA -----------------------------------------------
  // Fill in real artist details here. Leave "photo" as null until you
  // have real images — a placeholder block will show instead.
  const SITE_CC_EMAIL = "youremail@email.com"; // <-- your generic email, cc'd on every enquiry and used for artist sign-up enquiries

  const artists = [
    {
      id: "derek-slavin",
      name: "Derek Slavin",
      location: "Location",
      email: "derekslavin@email.com",
      bio: "Bio goes here — a couple of sentences about his practice, materials, and where in Cornwall he works.",
      reviews: [
        { stars: 5, quote: "Review quote goes here.", who: "Buyer name" }
      ],
      works: [
        { title: "Artwork title", price: "£000", medium: "Medium, size" },
        { title: "Artwork title", price: "£000", medium: "Medium, size" }
      ]
    },
    {
      id: "artist-2",
      name: "Artist 2",
      location: "Location",
      email: "artist2@email.com",
      bio: "Artist bio goes here — a couple of sentences about their practice, materials, and where in Cornwall they work.",
      reviews: [
        { stars: 5, quote: "Review quote goes here.", who: "Buyer name" }
      ],
      works: [
        { title: "Artwork title", price: "£000", medium: "Medium, size" },
        { title: "Artwork title", price: "£000", medium: "Medium, size" }
      ]
    },
    {
      id: "artist-3",
      name: "Artist 3",
      location: "Location",
      email: "artist3@email.com",
      bio: "Artist bio goes here — a couple of sentences about their practice, materials, and where in Cornwall they work.",
      reviews: [
        { stars: 5, quote: "Review quote goes here.", who: "Buyer name" }
      ],
      works: [
        { title: "Artwork title", price: "£000", medium: "Medium, size" },
        { title: "Artwork title", price: "£000", medium: "Medium, size" }
      ]
    },
    {
      id: "artist-4",
      name: "Artist 4",
      location: "Location",
      email: "artist4@email.com",
      bio: "Artist bio goes here — a couple of sentences about their practice, materials, and where in Cornwall they work.",
      reviews: [
        { stars: 5, quote: "Review quote goes here.", who: "Buyer name" }
      ],
      works: [
        { title: "Artwork title", price: "£000", medium: "Medium, size" }
      ]
    },
    {
      id: "artist-5",
      name: "Artist 5",
      location: "Location",
      email: "artist5@email.com",
      bio: "Artist bio goes here — a couple of sentences about their practice, materials, and where in Cornwall they work.",
      reviews: [
        { stars: 5, quote: "Review quote goes here.", who: "Buyer name" }
      ],
      works: [
        { title: "Artwork title", price: "£000", medium: "Medium, size" },
        { title: "Artwork title", price: "£000", medium: "Medium, size" }
      ]
    },
    {
      id: "artist-6",
      name: "Artist 6",
      location: "Location",
      email: "artist6@email.com",
      bio: "Artist bio goes here — a couple of sentences about their practice, materials, and where in Cornwall they work.",
      reviews: [
        { stars: 5, quote: "Review quote goes here.", who: "Buyer name" }
      ],
      works: [
        { title: "Artwork title", price: "£000", medium: "Medium, size" }
      ]
    }
  ];
  // ---------------------------------------------------------------------

  // "I'm an artist" contact button — opens an email to you
  document.getElementById('artistContactBtn').href =
    `mailto:${SITE_CC_EMAIL}?subject=${encodeURIComponent("I'd like to list my work on Cornwall Makers")}&body=${encodeURIComponent("Hi,\n\nI'm an artist based in Cornwall and I'd like to find out about listing my work on Cornwall Makers.\n\nMy name:\nWhere I'm based:\nWhat I make:\n\nThanks,\n")}`;


  const grid = document.getElementById('artistGrid');
  const detail = document.getElementById('detailPanel');
  const workGrid = document.getElementById('workGrid');

  function renderGrid(){
    grid.innerHTML = '';
    artists.forEach(a => {
      const card = document.createElement('button');
      card.className = 'artist-card';
      card.setAttribute('aria-label', `View ${a.name}'s work`);
      card.innerHTML = `
        <div class="artist-photo">Photo</div>
        <div>
          <span class="loc">${a.location}</span>
          <h3>${a.name}</h3>
        </div>
        <span class="view">View gallery
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </span>
      `;
      card.addEventListener('click', () => openArtist(a.id));
      grid.appendChild(card);
    });
  }

  function openArtist(id){
    const a = artists.find(x => x.id === id);
    if(!a) return;
    document.getElementById('heroName').textContent = a.name;
    document.getElementById('heroTag').textContent = a.location;
    document.getElementById('introName').textContent = a.name;
    document.getElementById('introQuote').textContent = `I am ${a.name}. ${a.bio}`;

    const reviewsEl = document.getElementById('detailReviews');
    reviewsEl.innerHTML = '';
    (a.reviews || []).forEach(r => {
      const div = document.createElement('div');
      div.className = 'review';
      div.innerHTML = `
        <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
        <p>"${r.quote}"<span class="who">${r.who}</span></p>
      `;
      reviewsEl.appendChild(div);
    });

    workGrid.innerHTML = '';
    a.works.forEach(w => {
      const subject = encodeURIComponent(`Enquiry: ${w.title} by ${a.name}`);
      const body = encodeURIComponent(
        `Hi ${a.name},\n\nI'd like to buy "${w.title}" (${w.medium}) listed at ${w.price} on Cornwall Makers.\n\nCould you let me know how to arrange payment and delivery/collection?\n\nThanks,\n`
      );
      const mailto = `mailto:${a.email}?cc=${encodeURIComponent(SITE_CC_EMAIL)}&subject=${subject}&body=${body}`;

      const card = document.createElement('div');
      card.className = 'work-card';
      card.innerHTML = `
        <div class="work-photo">Artwork photo</div>
        <h4>${w.title}</h4>
        <div class="price">${w.price} &middot; ${w.medium}</div>
        <a class="btn small" href="${mailto}">Enquire to buy</a>
      `;
      workGrid.appendChild(card);
    });

    detail.classList.add('open');
    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.getElementById('backBtn').addEventListener('click', () => {
    detail.classList.remove('open');
    document.getElementById('artists').scrollIntoView({ behavior: 'smooth' });
  });

  renderGrid();
