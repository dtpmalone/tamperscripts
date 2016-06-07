// ==UserScript==
// @name         tc.serienjunkies
// @namespace    com.tangledcode
// @version      0.2
// @description  download aid for serienjunkies
// @author       Daniel Malone
// @match        http://serienjunkies.org/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @resource     bootstrap https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css
// ==/UserScript==

GM_addStyle(GM_getResourceText("bootstrap"));
GM_addStyle('#bacon { position: fixed; top: 10px; right: 10px; width: 700px; background-color: #fff; border-color: #ddd; border-width: 1px; border-radius: 4px 4px 0 0; box-shadow: none; }');
GM_addStyle('#bacon li { text-align: left }');

var selected = { 'background-color': '#449d44'};

function getTvShowName(document) {
    var rawTitle = document.getElementsByTagName('title')[0].innerHTML;
    var firstPos = rawTitle.lastIndexOf('»') + 2;
    var lastPos = firstPos + rawTitle.slice(firstPos).indexOf('–') - 1;
    return rawTitle.slice(firstPos, lastPos);
}

function appendTvShowContainer(title, episodes) {
    var container = $('<div class="container"></div>');
    var box = $('<div id="bacon"></div>');
    box.append("<h1>"+ title +"</h1>");

    var list = $('<ul></ul>');
    for(i = 0; i<episodes.length; i++) {
        list.append('<li>'+ episodes[i] +'</li>');
    }
    box.append(list);

    container.append(box);
    $('body').append(container);
}

function uglify(title) {
	return title.trim().toLowerCase().replace(/ /g, '.');
}

function getSeason(uglyTvShowName, title) {
	var firstPos = uglyTvShowName.length + title.slice(uglyTvShowName.length).indexOf('.s') + 2;
	var lastPos = firstPos + title.slice(firstPos).indexOf('e');

	return parseInt(title.slice(firstPos, lastPos));
}

function getEpisode(uglyTvShowName, title) {
	var firstPos = uglyTvShowName.length + title.slice(uglyTvShowName.length).indexOf('.s') + 2;
	firstPos = firstPos + title.slice(firstPos).indexOf('e') + 1;
	var lastPos = firstPos + title.slice(firstPos).indexOf('.');

	return parseInt(title.slice(firstPos, lastPos));
}

function getEpisodes(quality, title) {
	var uglyTitle = uglify(title);
	var lastSeason = 0;
	var lastEpisode = 0;
	var uris = [];

	$('.post-content p strong:contains('+ quality +')').each(function() {
		var episodeTitle = $(this).text().toLowerCase();

		if (episodeTitle.startsWith(uglyTitle)) {
			var season = getSeason(title, episodeTitle);
			var episode = getEpisode(title, episodeTitle);

			if (season >= lastSeason && episode > lastEpisode) {
				lastSeason = season;
				lastEpisode =  episode;

				var link = $(this).siblings('div').find('a:contains("uploaded.net")')[0];
				if (link !== undefined) {
					uris.push($(link).attr('href'));
                    $(link).closest('div').css(selected);
				}
			}
		}
	});

	return uris;
}

$(document).ready(function() {
    var quality = '.720p.HDTV.';
    var title = getTvShowName(document);
    var episodes = getEpisodes(quality, title);
    appendTvShowContainer(title, episodes);
});
