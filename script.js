const img = document.querySelector('#img');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const occupation = document.querySelector('#occupation');
const follow1 = document.querySelector('#follow1');
const follow2 = document.querySelector('#follow2');

const number_Repos = document.querySelector('#repos');
const Repos = document.querySelector('.repo-list');

window.onload = () => {
	const uri = 'https://api.github.com/users/Vic-Orlands';
	fetch(uri).then((res) => res.json()).then((res) => {
		img.src = `${res.avatar_url}`
		img2.src = `${res.avatar_url}`
		img3.src = `${res.avatar_url}`
		occupation.innerHTML = `${res.bio}`;
		follow1.innerHTML = `${res.followers}`;
		follow2.innerHTML = `${res.following}`;
		number_Repos.innerHTML = `${res.public_repos}`;
	});

	const url = 'https://api.github.com/users/Vic-Orlands/repos';
	fetch(url).then((res) => res.json()).then((data) => {
		Repos.innerHTML =
			'<section>' +
			data
				.map((dat) => {
					return (
						'<section class="sect" >' +
						'<div>' +
						'<h2>' +
						dat.name +
						'</h2>' +
						'<h4>' +
						(dat.description !== null ? dat.description : '') +
						'</h4>' +
						'<ul>' +
						'<li />' +
						'<li>' +
						(dat.language !== null ? dat.language : '') +
						'</li>' +
						'<li>' +
						'Updated 7 days ago' +
						'</li>' +
						'</ul>' +
						'</div>' +
						'<button>' +
						'Star' +
						'</button>' +
						'</section>'
					);
				})
				.join('') +
			'</section>';
	});
};

let dropdown = document.querySelector('.mobile-view')

dropdown.addEventListener('click', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed')
  } else {
  dropdown.classList.add('closed')    
  }
})