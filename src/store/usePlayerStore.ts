import { create } from "zustand";

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: {
      default: { url: string };
    };
    channelTitle: string;
  };
}

type RepeatMode = "noRepeat" | "repeatOne" | "repeatAll";

interface PlayerState {
  currentVideo: Video | null;
  videoList: Video[];
  repeatMode: RepeatMode;
  shuffle: boolean;

  setCurrentVideo: (video: Video) => void;
  setVideoList: (videos: Video[]) => void;
  setRepeatMode: (mode: RepeatMode) => void;
  toggleRepeatMode: () => void;
  toggleShuffle: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentVideo: null,
  videoList: [],
  repeatMode: "noRepeat",
  shuffle: false,

  setCurrentVideo: (video) => set({ currentVideo: video }),
  setVideoList: (videos) => set({ videoList: videos }),
  setRepeatMode: (mode) => set({ repeatMode: mode }),
  toggleRepeatMode: () => {
    const current = get().repeatMode;
    const nextMode =
      current === "noRepeat"
        ? "repeatOne"
        : current === "repeatOne"
        ? "repeatAll"
        : "noRepeat";
    set({ repeatMode: nextMode });
  },
  toggleShuffle: () => set((state) => ({ shuffle: !state.shuffle })),
}));
