import {Injectable} from "@angular/core";

export interface TvShow {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  public tvShows = [
    {
      "id": 0,
      "title": "Galactic Pioneers",
      "description": "Set in the year 2500, this sci-fi drama follows a group of explorers traveling to uncharted galaxies, encountering new life forms and tackling interstellar mysteries.",
      "imageSrc": "galactic-pioneers.png"
    },
    {
      "id": 1,
      "title": "Mysteries of Avalon",
      "description": "A fantasy series blending Arthurian legends with modern-day Britain, where a young woman discovers she's the last descendant of Merlin, embarking on a quest to find Excalibur.",
      "imageSrc": "mystery-of-avalon.png"
    },
    {
      "id": 2,
      "title": "Sands of Time",
      "description": "An adventurous historical drama set in ancient Egypt, focusing on the life of a young pharaoh battling political intrigue and a mysterious curse plaguing his kingdom.",
      "imageSrc": "sands-of-time.png"
    },
    {
      "id": 3,
      "title": "Urban Shadows",
      "description": "A gritty urban fantasy where mythical creatures are real and hidden among us. A detective who is also a werewolf solves supernatural crimes in a city where magic is the norm.",
      "imageSrc": "urban-shadows.png"
    },
    {
      "id": 4,
      "title": "Tomorrow's Hope",
      "description": "A heartwarming series set in a futuristic utopia, where a group of children from diverse backgrounds learn about cooperation and understanding in a world without conflict.",
      "imageSrc": "tomorrows-hope.png"
    },
    {
      "id": 5,
      "title": "Echoes of Atlantis",
      "description": "A thrilling underwater adventure series exploring the rediscovery of the mythical city of Atlantis, where modern explorers and ancient Atlantean technology collide, uncovering secrets beneath the ocean.",
      "imageSrc": "echoes-of-atlantis.png"
    },
    {
      "id": 6,
      "title": "Chronicle of the Stars",
      "description": "Set in a distant future, this epic space opera follows the journey of a rebel fleet battling against a dominant galactic empire, filled with space battles, alien alliances, and the quest for a legendary planet of peace.",
      "imageSrc": "chronicle-of-the-stars.png"
    },
    {
      "id": 7,
      "title": "Whispers in the Wall",
      "description": "A supernatural mystery series set in Victorian England, where a young detective with the ability to communicate with spirits solves crimes with the help of ghostly whispers and otherworldly clues.",
      "imageSrc": "whispers-in-the-wall.png"
    },
    {
      "id": 8,
      "title": "Skyward Bound",
      "description": "An inspiring tale of a group of pioneering aviators in the early 20th century, facing challenges and adventures in the sky as they push the boundaries of early flight technology.",
      "imageSrc": "skyward-bound.png"
    }
  ];

}
