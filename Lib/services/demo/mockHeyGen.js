export class MockHeyGenService {
  constructor() {
    this.videos = [];
    this.avatars = [
      { id: 'avatar1', name: 'Professional Amy', style: 'business' },
      { id: 'avatar2', name: 'Casual Tom', style: 'friendly' },
      { id: 'avatar3', name: 'Expert Sarah', style: 'academic' }
    ];
    this.voices = [
      { id: 'voice1', name: 'Natural US', language: 'en-US' },
      { id: 'voice2', name: 'British Accent', language: 'en-GB' },
      { id: 'voice3', name: 'Warm Female', language: 'en-US' }
    ];
  }

  async createAvatar(options) {
    console.log(`[DEMO] Creating avatar video with text: "${options.text}"`);
    
    const video = {
      id: `video_${Date.now()}`,
      status: 'processing',
      avatarId: options.avatarId || 'avatar1',
      voice: options.voice || 'voice1',
      text: options.text,
      duration: Math.ceil(options.text.split(' ').length / 2.5),
      createdAt: new Date().toISOString(),
      videoUrl: null
    };
    
    this.videos.push(video);
    
    setTimeout(() => {
      video.status = 'completed';
      video.videoUrl = `https://demo.heygen.com/videos/${video.id}.mp4`;
      console.log(`[DEMO] Avatar video completed: ${video.videoUrl}`);
    }, 5000);
    
    return video;
  }

  async getVideoStatus(videoId) {
    const video = this.videos.find(v => v.id === videoId);
    
    if (!video) {
      return { error: 'Video not found' };
    }
    
    return {
      id: video.id,
      status: video.status,
      videoUrl: video.videoUrl,
      duration: video.duration,
      progress: video.status === 'processing' ? 65 : 100
    };
  }

  async listAvatars() {
    console.log(`[DEMO] Fetching available avatars`);
    return { avatars: this.avatars };
  }

  async listVoices() {
    console.log(`[DEMO] Fetching available voices`);
    return { voices: this.voices };
  }

  async generateThumbnail(videoId) {
    console.log(`[DEMO] Generating thumbnail for video ${videoId}`);
    
    return {
      thumbnailUrl: `https://demo.heygen.com/thumbnails/${videoId}.jpg`,
      width: 1280,
      height: 720
    };
  }
}
