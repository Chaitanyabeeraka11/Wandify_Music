import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../Assets/assets";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(new Audio());
  const seekBgRef = useRef();
  const seekBarRef = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalDuration: {
      second: 0,
      minute: 0,
    },
  });

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = track.file;
    audio.load();

    const setAudioData = () => {
      setTime((prevTime) => ({
        ...prevTime,
        totalDuration: {
          minute: Math.floor(audio.duration / 60),
          second: Math.floor(audio.duration % 60),
        },
      }));
    };

    const setAudioTime = () => {
      setTime((prevTime) => ({
        ...prevTime,
        currentTime: {
          minute: Math.floor(audio.currentTime / 60),
          second: Math.floor(audio.currentTime % 60),
        },
      }));
    };

    // Add event listeners
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    // Cleanup function
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, [track]);

  const play = () => {
    if (audioRef.current.src) {
      audioRef.current
        .play()
        .then(() => {
          setPlayStatus(true);
          console.log("Playback started successfully");
        })
        .catch((error) => {
          console.error("Playback failed", error);
          setPlayStatus(false);
        });
    } else {
      console.error("No audio source set");
    }
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const setNewTrack = (newTrack) => {
    setTrack(newTrack);
    setPlayStatus(false);
  };

  const ContextValue = {
    audioRef,
    seekBarRef,
    seekBgRef,
    track,
    setTrack: setNewTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={ContextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext, PlayerContextProvider };
