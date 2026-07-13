window.PORTFOLIO_PROJECTS = [
  {
    "title": "Real-Time Soft-Tissue Simulation in Unity",
    "date": "2025–2026",
    "summary": "Converted a CUDA/C++ Material Point Method research solver into a configurable Unity platform for real-time deformable-material simulation, interaction, and GPU surface rendering.",
    "categories": [
      "Simulation",
      "Visualization / XR",
      "Robotics",
      "Medical Robotics"
    ],
    "tags": [
      "Unity",
      "C# / C++",
      "CUDA",
      "Compute Shaders",
      "MPM"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/cressim-unity/demo_gif.gif",
        "alt": "Real-time deformable material simulation rendered in Unity",
        "caption": "Redacted real-time demo of deformable material interaction and GPU surface rendering."
      },
      {
        "type": "video",
        "src": "projects/cressim-unity/demo.mp4",
        "poster": "projects/cressim-unity/demo-poster.jpg",
        "alt": "Real-time deformable material simulation video",
        "caption": "Full redacted demo clip."
      },
      {
        "type": "video",
        "src": "projects/cressim-unity/sphere-cutting.mp4",
        "poster": "projects/cressim-unity/sphere-cutting-poster.jpg",
        "alt": "Deformable sphere cutting experiment in Unity",
        "caption": "Cutting and separation experiment using a particle-based deformable sphere."
      }
    ],
    "highlights": [
      "Evaluated modern soft-body approaches and selected Material Point Method for large deformation, separation, and GPU execution.",
      "Built the native C++/CUDA solver as a Windows Unity plugin, expanded its C API, and created C# components for simulation, materials, colliders, and instrument interaction.",
      "Transferred particle data directly from CUDA into Unity graphics buffers and reconstructed surfaces with compute-shader density fields, marching cubes, and procedural GPU rendering.",
      "Improved scalability with sparse brick-based processing that skipped empty regions, while exploring stable labels and cut-surface visualization."
    ],
    "resources": []
  },
  {
    "title": "Unity Industry Summit: Digital Twins for Robotic Surgery",
    "date": "2025",
    "summary": "Presented a practical architecture for using real-time 3D digital twins to log, replay, visualize, and learn from robot-assisted workflows.",
    "categories": [
      "Visualization / XR",
      "Simulation",
      "Medical Robotics"
    ],
    "tags": [
      "Unity",
      "Digital Twins",
      "Data Visualization",
      "Technical Communication"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/unity-industry-summit/speaker.jpeg",
        "focus": "top",
        "alt": "Matthew Euliano speaking at Unity Industry Summit America 2025",
        "caption": "Speaking at Unity Industry Summit America 2025."
      },
      {
        "type": "youtube",
        "src": "https://www.youtube.com/embed/9MxLYg7uK4g?start=157",
        "alt": "Building Digital Twins for Robotic Surgery conference presentation",
        "caption": "Public conference recording: Building Digital Twins for Robotic Surgery—Data Logging, Playback, and Visualization."
      }
    ],
    "highlights": [
      "Presented at Unity Industry Summit America 2025 on building useful digital twins for robot-assisted workflows.",
      "Explained how synchronized 3D state and time-series data can turn complex system behavior into an inspectable, replayable record.",
      "Connected logging and playback to faster debugging, clearer analysis, and future data-driven development without exposing proprietary implementation details."
    ],
    "resources": [
      {
        "label": "Watch the Presentation",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=9MxLYg7uK4g&t=157s",
        "external": true
      }
    ]
  },
  {
    "title": "Automatic Object Registration for 3D Endoscopic Overlay",
    "date": "2023",
    "summary": "Built a proof-of-concept endoscopic AR overlay pipeline that uses GDRNPP 6D pose estimation, stereo endoscope preprocessing, Unity visualization, and DDS messaging to register virtual objects onto physical objects in a surgeon-facing display.",
    "categories": [
      "Robotics",
      "Visualization / XR",
      "AI / CV",
      "Medical Robotics"
    ],
    "tags": [
      "GDRNPP",
      "6D Pose Estimation",
      "Unity",
      "DDS",
      "OpenCV",
      "YOLOX",
      "ONNX"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/endoscopic-ar/demo.gif",
        "alt": "Unity reconstruction and object detection for endoscopic AR object registration",
        "caption": "Unity reconstruction paired with object detection from an endoscopic image."
      },
      {
        "type": "image",
        "src": "projects/endoscopic-ar/detection-and-reconstruction.png",
        "alt": "Endoscopic object detection and Unity reconstruction workflow",
        "caption": "Detected objects and their corresponding virtual reconstruction."
      },
      {
        "type": "image",
        "src": "projects/endoscopic-ar/pose-overlay.png",
        "alt": "6D object pose reconstruction for marker and pudding box",
        "caption": "Camera-relative pose reconstruction applied to textured 3D object models."
      }
    ],
    "highlights": [
      "Preprocessed stereo endoscope imagery by deinterlacing, rectifying, cropping, and scaling images for the GDRNPP pipeline.",
      "Used YOLOX object detection and GDRNPP 6D pose estimation to recover camera-relative object transforms for rigid objects in the endoscopic field of view.",
      "Integrated pose estimates into Unity over DDS, converting coordinate systems and applying transforms to matching 3D models for AR overlay.",
      "Explored deployment optimization through ONNX conversion and INT8 quantization, reducing model size from 375.7 MB to 101.9 MB and improving CPU inference from 5.2s to 3.2s per frame."
    ],
    "resources": [
      {
        "label": "Project Paper",
        "type": "paper",
        "url": "projects/endoscopic-ar/project-paper.pdf",
        "external": false
      }
    ]
  },
  {
    "title": "Parallel Parking using Reinforcement Learning",
    "summary": "Applied deep reinforcement learning algorithms to simulated parallel parking in Unity 3D using the ML-Agents toolkit.",
    "categories": [
      "Simulation",
      "AI / CV",
      "Robotics"
    ],
    "tags": [
      "Unity",
      "C#",
      "Python",
      "ML-Agents",
      "PPO / SAC / TD3"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/rl-parking/final-demo.gif",
        "alt": "Reinforcement learning car completing a parallel parking maneuver",
        "caption": "Final simulated parallel parking demo."
      },
      {
        "type": "image",
        "src": "projects/rl-parking/archived-demo.gif",
        "alt": "Unity reinforcement learning parking demo",
        "caption": "Archived demo animation from the original portfolio."
      }
    ],
    "highlights": [
      "Compared PPO, SAC, and TD3 on a simulated parking task.",
      "Built the training environment in Unity 3D with the ML-Agents toolkit.",
      "Connected vehicle behavior, reward design, and demo visualization into a repeatable simulation workflow."
    ],
    "resources": [
      {
        "label": "Technical Report",
        "type": "report",
        "url": "projects/rl-parking/report.pdf",
        "external": false
      },
      {
        "label": "Presentation",
        "type": "powerpoint",
        "url": "projects/rl-parking/presentation.ppt",
        "external": false
      },
      {
        "label": "Code Repository",
        "type": "github",
        "url": "https://github.com/meuliano/RL_Parking",
        "external": true
      },
      {
        "label": "Video Demo",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=QDVwSAgY6cA",
        "external": true
      }
    ],
    "date": "2022"
  },
  {
    "title": "Pillavate",
    "summary": "Designed an elevating pillow concept that responds to biometric sensor readings for people with congestive heart failure and sleep apnea.",
    "categories": [
      "Hardware",
      "Personal Project"
    ],
    "tags": [
      "Arduino",
      "Product Design",
      "Biometrics",
      "Prototyping"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/pillavate/base-demo.gif",
        "alt": "Pillavate elevating pillow prototype",
        "caption": "Base prototype motion."
      },
      {
        "type": "image",
        "src": "projects/pillavate/prototype-demo.gif",
        "alt": "Pillavate prototype demo",
        "caption": "Prototype demo from the project archive."
      },
      {
        "type": "image",
        "src": "projects/pillavate/user-demo.gif",
        "alt": "Pillavate user demo",
        "caption": "User-facing demonstration."
      }
    ],
    "highlights": [
      "Designed around biometric sensing and assisted sleep positioning.",
      "Built and demonstrated an elevating pillow prototype.",
      "Documented the concept, motivation, and prototype design in a technical report."
    ],
    "resources": [
      {
        "label": "Technical Report",
        "type": "report",
        "url": "projects/pillavate/report.pdf",
        "external": false
      }
    ],
    "date": "2019"
  },
  {
    "title": "SDU Medical Robotics",
    "summary": "Taught a UR3 arm to perform electrical impedance sensing through demonstration using dynamic movement primitives.",
    "categories": [
      "Robotics",
      "Medical Robotics"
    ],
    "tags": [
      "Python",
      "DMP",
      "MATLAB",
      "DAQ",
      "UR3"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/sdu-medical-robotics/project.png",
        "alt": "SDU medical robotics project setup",
        "caption": "UR3 medical robotics project visual."
      }
    ],
    "highlights": [
      "Worked with robot learning from demonstration.",
      "Used dynamic movement primitives for a medical sensing task.",
      "Combined robot motion, DAQ workflows, and MATLAB/Python analysis."
    ],
    "resources": [],
    "date": "2022"
  },
  {
    "title": "Credit Card Fraud Detection",
    "summary": "Built machine learning models for credit card fraud detection using SVM and logistic regression, with preprocessing for severe class imbalance.",
    "categories": [
      "AI / CV",
      "Personal Project"
    ],
    "tags": [
      "Python",
      "SVM",
      "Logistic Regression",
      "Machine Learning",
      "Data Preprocessing"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/fraud-detection/results.png",
        "alt": "Credit card fraud detection visualization",
        "caption": "Fraud detection model and data workflow visual."
      }
    ],
    "highlights": [
      "Compared support vector machines and logistic regression models.",
      "Used preprocessing and resampling to compensate for heavy class imbalance.",
      "Focused on the practical tradeoffs of fraud classification metrics."
    ],
    "resources": [],
    "date": "2021"
  },
  {
    "title": "VI-SLAM on NUance Car",
    "summary": "Integrated ORB-SLAM3 with ROS for localization and mapping on Northeastern's NUance autonomous car platform.",
    "categories": [
      "Robotics",
      "AI / CV"
    ],
    "tags": [
      "ROS",
      "ORB-SLAM3",
      "Python",
      "MATLAB",
      "Computer Vision"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/nuance-vi-slam/demo.gif",
        "alt": "NUance autonomous car SLAM demo",
        "caption": "ORB-SLAM3 and ROS localization work on the NUance autonomous car."
      },
      {
        "type": "image",
        "src": "projects/nuance-vi-slam/vehicle.png",
        "alt": "NUance autonomous vehicle",
        "caption": "Northeastern NUance autonomous vehicle platform."
      },
      {
        "type": "image",
        "src": "projects/nuance-vi-slam/orbslam-output.png",
        "alt": "ORB-SLAM3 map and localization output",
        "caption": "Localization and mapping visualization."
      },
      {
        "type": "video",
        "src": "projects/nuance-vi-slam/demo.mp4",
        "poster": "projects/nuance-vi-slam/vehicle.png",
        "alt": "NUance car demo video",
        "caption": "Local demo clip from the project archive."
      }
    ],
    "highlights": [
      "Integrated ORB-SLAM3 into a ROS-based robotics workflow.",
      "Worked with vehicle sensor data, mapping outputs, and localization visualization.",
      "Documented work through project presentation material."
    ],
    "resources": [
      {
        "label": "Final Presentation",
        "type": "presentation",
        "url": "projects/nuance-vi-slam/presentation.pdf",
        "external": false
      },
      {
        "label": "GitHub Repository",
        "type": "github",
        "url": "https://github.com/meuliano/rsn_orbslam3",
        "external": true
      }
    ],
    "date": "2022"
  },
  {
    "title": "Stretch RE1 Autonomous Navigation",
    "summary": "Used a Hello Robot Stretch RE1 to move a multimodal sensor suite through indoor environments for remote perception tasks.",
    "categories": [
      "Robotics"
    ],
    "tags": [
      "ROS",
      "Python",
      "Navigation",
      "Mapping",
      "Path Planning"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/stretch-navigation/demo.gif",
        "alt": "Stretch RE1 autonomous navigation demo",
        "caption": "Navigation demo with the Hello Robot Stretch RE1."
      }
    ],
    "highlights": [
      "Worked with ROS navigation, mapping, and path planning.",
      "Used a mobile manipulation platform to move a sensor suite through indoor space.",
      "Connected robotics navigation with remote human-state perception goals."
    ],
    "resources": [],
    "date": "2022"
  },
  {
    "title": "Electronic Limited-Slip Differential",
    "summary": "Designed and tested the control system for an electronically controlled limited-slip differential for an off-road Baja vehicle.",
    "categories": [
      "Hardware",
      "Robotics"
    ],
    "tags": [
      "C++",
      "Arduino",
      "CAD",
      "Sensor Selection",
      "Vehicle Simulation"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/baja-elsd/cad.jpg",
        "alt": "CAD rendering of the electronic limited-slip differential",
        "caption": "CAD design for the Baja SAE electronic limited-slip differential."
      },
      {
        "type": "image",
        "src": "projects/baja-elsd/wiring.png",
        "alt": "Electrical wiring for the Baja differential control system",
        "caption": "Wiring and control system integration."
      },
      {
        "type": "image",
        "src": "projects/baja-elsd/vehicle-simulation.jpg",
        "alt": "Vehicle simulation screenshot",
        "caption": "Vehicle simulation for system behavior and validation."
      }
    ],
    "highlights": [
      "Designed the control system and selected supporting sensors.",
      "Integrated electronics into a physical off-road vehicle platform.",
      "Led vehicle simulation work to compare behavior across design choices."
    ],
    "resources": [
      {
        "label": "Final Report",
        "type": "report",
        "url": "projects/baja-elsd/report.docx",
        "external": false
      }
    ],
    "date": "2019"
  },
  {
    "title": "Computer Vision Eye Tracking",
    "summary": "Extended an animatronic eye mechanism with webcam-based face tracking using OpenCV, Raspberry Pi, and Arduino control.",
    "categories": [
      "AI / CV",
      "Hardware"
    ],
    "tags": [
      "OpenCV",
      "Python",
      "Raspberry Pi",
      "Arduino",
      "Mechatronics"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/eye-tracking/demo.gif",
        "alt": "Animatronic eyes tracking movement",
        "caption": "Face tracking controlling animatronic eye motion."
      },
      {
        "type": "video",
        "src": "projects/eye-tracking/test.mp4",
        "poster": "projects/eye-tracking/poster.jpg",
        "alt": "Eye tracking test video",
        "caption": "Local test clip from the prototype."
      },
      {
        "type": "image",
        "src": "projects/eye-tracking/mechanism.png",
        "alt": "Animatronic eye mechanism",
        "caption": "Prototype mechanism and control setup."
      }
    ],
    "highlights": [
      "Used OpenCV face tracking to drive physical eye movement.",
      "Connected a Raspberry Pi vision pipeline to Arduino-controlled servos.",
      "Built on an experimental robot design and extended it with perception."
    ],
    "resources": [],
    "date": "2021"
  },
  {
    "title": "Virtual Reality Escape Room",
    "summary": "Developed an Oculus Rift VR escape room prototype with Unreal Engine 4 and Blender assets.",
    "categories": [
      "Visualization / XR",
      "Personal Project"
    ],
    "tags": [
      "Unreal Engine",
      "C++",
      "Blender",
      "VR"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/vr-escape-room/demo.gif",
        "alt": "Virtual reality escape room demo",
        "caption": "VR escape room gameplay prototype."
      },
      {
        "type": "image",
        "src": "projects/vr-escape-room/environment.jpg",
        "alt": "VR game environment screenshot",
        "caption": "Puzzle environment screenshot."
      },
      {
        "type": "image",
        "src": "projects/vr-escape-room/interaction.jpg",
        "alt": "VR game interaction screenshot",
        "caption": "Interaction and environment work."
      }
    ],
    "highlights": [
      "Built the interactive prototype in Unreal Engine 4.",
      "Created and integrated 3D assets using Blender.",
      "Designed around Oculus Rift CV1 interaction constraints."
    ],
    "resources": [],
    "date": "2020"
  },
  {
    "title": "ImageMosaic",
    "summary": "Created an image stitching experiment that builds mosaics from sets of related images.",
    "categories": [
      "AI / CV",
      "Personal Project"
    ],
    "tags": [
      "Computer Vision",
      "Image Processing",
      "Python"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/image-mosaic/output.png",
        "alt": "Image mosaic output",
        "caption": "Generated image mosaic output."
      }
    ],
    "highlights": [
      "Used image processing techniques to combine source images.",
      "Focused on feature matching, alignment, and visual output quality.",
      "Kept as an archive example of computer vision coursework and experimentation."
    ],
    "resources": [
      {
        "label": "Older Report",
        "type": "report",
        "url": "https://drive.google.com/file/d/1p8h66kcTu3J3DAQ-OETgzaHgj101Kw8o/view?usp=sharing",
        "external": true
      }
    ],
    "date": "2021"
  },
  {
    "title": "Gum Stick Launcher",
    "summary": "Designed, built, tested, and iterated a deliberately overpowered launcher for sticks of gum.",
    "categories": [
      "Hardware",
      "Personal Project"
    ],
    "tags": [
      "Arduino",
      "C++",
      "CAD",
      "Mechanical Design"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/gum-launcher/prototype.jpg",
        "alt": "Gum stick launcher prototype",
        "caption": "Built prototype."
      },
      {
        "type": "video",
        "src": "projects/gum-launcher/test.mp4",
        "poster": "projects/gum-launcher/prototype.jpg",
        "alt": "Gum stick launcher test video",
        "caption": "Local test clip from the project archive."
      },
      {
        "type": "image",
        "src": "projects/gum-launcher/cad.jpg",
        "alt": "CAD model for gum stick launcher",
        "caption": "CAD design iteration."
      }
    ],
    "highlights": [
      "Designed a playful but real mechatronic prototype.",
      "Iterated mechanical packaging, actuation, and control.",
      "Used CAD, Arduino, and physical testing to improve reliability."
    ],
    "resources": [],
    "date": "2021"
  },
  {
    "title": "Quote Display",
    "summary": "Built an e-ink quote display that pulled messages from a Google Doc and refreshed on a Raspberry Pi.",
    "categories": [
      "Hardware",
      "Personal Project"
    ],
    "tags": [
      "Raspberry Pi",
      "Google APIs",
      "E-Ink",
      "Python"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/quote-display/display.jpg",
        "alt": "E-ink quote display",
        "caption": "Physical e-ink quote display."
      },
      {
        "type": "image",
        "src": "projects/quote-display/electronics.jpg",
        "alt": "Quote display electronics",
        "caption": "Prototype setup and display hardware."
      }
    ],
    "highlights": [
      "Used a Raspberry Pi to pull messages from Google APIs.",
      "Displayed dynamic text on an e-ink screen.",
      "Built a small always-on device around a simple personal workflow."
    ],
    "resources": [],
    "date": "2021"
  },
  {
    "title": "Reverse Engineering / Breaking Things",
    "summary": "Disassembled consumer electronics to study mechanisms, manufacturing decisions, repairability, and hidden design tradeoffs.",
    "categories": [
      "Hardware",
      "Personal Project"
    ],
    "tags": [
      "Reverse Engineering",
      "Hand Tools",
      "Electronics",
      "Manufacturing"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/reverse-engineering/parts.jpg",
        "alt": "Disassembled electronics parts",
        "caption": "Parts from disassembly and reverse engineering practice."
      },
      {
        "type": "image",
        "src": "projects/reverse-engineering/radio.jpg",
        "alt": "Disassembled radio",
        "caption": "Radio teardown."
      },
      {
        "type": "image",
        "src": "projects/reverse-engineering/controller.jpg",
        "alt": "Disassembled game controller",
        "caption": "Controller teardown."
      }
    ],
    "highlights": [
      "Studied how commercial products are assembled and packaged.",
      "Practiced careful teardown, part identification, and design reasoning.",
      "Used disassembly as a way to learn real-world manufacturing constraints."
    ],
    "resources": [],
    "date": "2021"
  },
  {
    "title": "Fingertip Protector",
    "summary": "Designed a custom fingertip brace and protector after a kitchen accident made off-the-shelf protection feel very inadequate.",
    "categories": [
      "Hardware",
      "Personal Project"
    ],
    "tags": [
      "CAD",
      "Rapid Prototyping",
      "Mechanical Design"
    ],
    "media": [
      {
        "type": "image",
        "src": "projects/fingertip-protector/protector.jpg",
        "alt": "Custom fingertip protector prototype",
        "caption": "Finished fingertip protector prototype."
      },
      {
        "type": "image",
        "src": "projects/fingertip-protector/cad.jpg",
        "alt": "CAD model of fingertip protector",
        "caption": "CAD model for the custom protector."
      },
      {
        "type": "video",
        "src": "projects/fingertip-protector/demo.mp4",
        "poster": "projects/fingertip-protector/protector.jpg",
        "alt": "Fingertip protector demo video",
        "caption": "Local demo clip from the project archive."
      }
    ],
    "highlights": [
      "Designed around comfort, protection, and usability with an injured finger.",
      "Used CAD to quickly iterate the brace geometry.",
      "Turned an annoying real-world problem into a small design exercise."
    ],
    "resources": [],
    "date": "2021"
  }
];
