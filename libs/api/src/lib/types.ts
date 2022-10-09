export interface SubsonicApiResponse<T extends SubsonicResponseBase> {
  "subsonic-response": T
}

interface SubsonicResponseBase {
  status: string;
  version: string;
  type: string;
  serverVersion: string;
}

export interface SubsonicPlaylist {
  id: string;
  name: string;
  songCount: number;
  duration: number;
  public: boolean;
  owner: string;
  ///ISO date
  created: string;
  ///ISO date
  changed: string;
}

export interface SubsonicGetPlaylistsResponse extends SubsonicResponseBase {
  playlists: {
    playlist: SubsonicPlaylist[];
  }
}


