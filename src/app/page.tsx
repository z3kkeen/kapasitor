'use client'
import {
  Page,
  Block,
  Button,
  BlockTitle,
} from 'konsta/react';
import { Guitar, Play, Pause, StopCircle, Volume2, Zap } from 'lucide-react';

const buttons = [
  { 
    id: 1, 
    audio: "/bass_drop.mp3",
    icon: Guitar,
    color: 'bg-sky-300',
    text: 'text-sky-100',
    border: 'border-sky-500',
  },
  {
    id: 2, 
    audio: "/boo-womp.mp3", 
    icon: Play,
    color: 'bg-indigo-400', 
    text: 'text-indigo-100',
    border: 'border-indigo-500',
  },
  {
    id: 3, 
    audio: "/dissapointed.mp3", 
    icon: Pause,
    color: 'bg-cyan-400', 
    text: 'text-cyan-100',
    border: 'border-cyan-500',
  },
  {
    id: 4, 
    audio: "/heheha.mp3", 
    icon: StopCircle,
    color: 'bg-purple-300', 
    text: 'text-purple-100',
    border: 'border-purple-500',
  },
  {
    id: 5, 
    audio: "/tadaa.mp3", 
    icon: Volume2,
    color: 'bg-teal-300', 
    text: 'text-teal-100',
    border: 'border-teal-500',
  },
  {
    id: 6, 
    audio: "/vine_boom.mp3", 
    icon: Zap,
    color: 'bg-pink-300', 
    text: 'text-pink-100',
    border: 'border-pink-500',
  }
];

export default function Home() {
  const playAudio = (e) => {
    const btnID = parseInt(e.currentTarget.value, 10);
    const button = buttons.find((btn) => btn.id === btnID);

    if (button) {
      const audio = new Audio(button.audio);
      audio.play().catch(() => alert('Error playing audio.'));
    }
  };

  return (
    <Page>
      <div>
        <h1 className="text-2xl text-center mt-6"><b>Soundboard</b></h1>
      </div>

      <Block strong>
        <p className="text-md">
          Press the buttons below to play short, reactionary audio clips.
        </p>
      </Block>
      <BlockTitle className="text-lg">All sounds</BlockTitle>

      <Block strong className="flex flex-wrap justify-center items-center h-2/3 gap-3">
        {buttons.map((button) => {
          const Icon = button.icon;

          return (
            <Button key={button.id} className={`w-[35%] h-[30%] bg- text-4xl border-4 border-zinc-600 ${button.color} ${button.border} `} onClick={playAudio} value={button.id}>
              <Icon className={`w-10 h-auto ${button.text}`} />
            </Button>
          )})}
      </Block>
    </Page>
  );
}
