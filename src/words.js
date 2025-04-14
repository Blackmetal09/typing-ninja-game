// Pool of words and prompts arranged by difficulty level
const wordPools = {
    1: [
      { word: 'code', prompt: 'Bypassing security protocol...' },
      { word: 'hack', prompt: 'Accessing restricted server...' },
      { word: 'byte', prompt: 'Collecting data fragments...' },
      { word: 'data', prompt: 'Extracting secure information...' },
      { word: 'node', prompt: 'Connecting to network node...' },
      { word: 'sync', prompt: 'Synchronizing access points...' },
      { word: 'file', prompt: 'Retrieving classified files...' },
      { word: 'loop', prompt: 'Exploiting recursive routines...' },
      { word: 'gate', prompt: 'Opening security gateway...' },
      { word: 'port', prompt: 'Scanning open network ports...' },
      { word: 'ping', prompt: 'Testing connection stability...' },
      { word: 'host', prompt: 'Identifying target host...' },
      { word: 'scan', prompt: 'Analyzing system vulnerabilities...' },
      { word: 'void', prompt: 'Entering null-space protocol...' },
      { word: 'root', prompt: 'Gaining administrator access...' }
    ],
    2: [
      { word: 'access', prompt: 'Breaking through level 2 firewall...' },
      { word: 'binary', prompt: 'Translating machine code...' },
      { word: 'cipher', prompt: 'Decoding encrypted message...' },
      { word: 'cookie', prompt: 'Intercepting session tokens...' },
      { word: 'kernel', prompt: 'Accessing system core...' },
      { word: 'matrix', prompt: 'Navigating data structure...' },
      { word: 'python', prompt: 'Executing stealth script...' },
      { word: 'router', prompt: 'Hijacking network traffic...' },
      { word: 'server', prompt: 'Breaching remote systems...' },
      { word: 'system', prompt: 'Overriding security controls...' },
      { word: 'packet', prompt: 'Capturing network transmissions...' },
      { word: 'module', prompt: 'Loading infiltration module...' },
      { word: 'secure', prompt: 'Disabling security measures...' },
      { word: 'thread', prompt: 'Intercepting process execution...' },
      { word: 'zombie', prompt: 'Activating sleeper program...' }
    ],
    3: [
      { word: 'algorithm', prompt: 'Cracking complex security algorithm...' },
      { word: 'backdoor', prompt: 'Installing covert access point...' },
      { word: 'compiler', prompt: 'Manipulating code translation...' },
      { word: 'database', prompt: 'Extracting classified records...' },
      { word: 'encoding', prompt: 'Breaking message encryption...' },
      { word: 'firewall', prompt: 'Bypassing advanced defenses...' },
      { word: 'hashcode', prompt: 'Deciphering password hashes...' },
      { word: 'protocol', prompt: 'Subverting network rules...' },
      { word: 'terminal', prompt: 'Gaining shell access...' },
      { word: 'overflow', prompt: 'Executing buffer attack...' },
      { word: 'keylogger', prompt: 'Implanting surveillance software...' },
      { word: 'malware', prompt: 'Deploying stealth malicious code...' }
    ],
    4: [
      { word: 'encryption', prompt: 'Decrypting military-grade protection...' },
      { word: 'middleware', prompt: 'Compromising system middleware...' },
      { word: 'repository', prompt: 'Infiltrating secure code storage...' },
      { word: 'javascript', prompt: 'Injecting client-side exploit...' },
      { word: 'bootloader', prompt: 'Modifying system startup sequence...' },
      { word: 'hypervisor', prompt: 'Escaping virtual environment...' },
      { word: 'processor', prompt: 'Overclocking CPU for brute force...' },
      { word: 'frequency', prompt: 'Tuning to secure transmission band...' },
      { word: 'executable', prompt: 'Planting trojan program...' },
      { word: 'blockchain', prompt: 'Breaking distributed ledger...' },
      { word: 'bandwidth', prompt: 'Flooding network with requests...' },
      { word: 'recursive', prompt: 'Creating self-replicating breach...' }
    ],
    5: [
      { word: 'authentication', prompt: 'Bypassing multi-factor verification...' },
      { word: 'cryptography', prompt: 'Breaking quantum-resilient encryption...' },
      { word: 'virtualization', prompt: 'Escaping containerized environment...' },
      { word: 'microprocessor', prompt: 'Executing hardware-level exploit...' },
      { word: 'infrastructure', prompt: 'Compromising enterprise systems...' },
      { word: 'optimization', prompt: 'Accelerating brute force attempts...' },
      { word: 'cybersecurity', prompt: 'Disabling advanced threat detection...' },
      { word: 'serialization', prompt: 'Injecting malicious data objects...' },
      { word: 'decentralized', prompt: 'Breaching distributed security...' },
      { word: 'dependencies', prompt: 'Poisoning software supply chain...' }
    ],
    // New advanced level with very complex words
    6: [
      { word: 'cryptocurrency', prompt: 'Intercepting digital currency transfers...' },
      { word: 'quantumcomputing', prompt: 'Breaching quantum encryption barriers...' },
      { word: 'neuromorphic', prompt: 'Exploiting AI defense systems...' },
      { word: 'biotechnology', prompt: 'Hacking biometric identification...' },
      { word: 'nanotechnology', prompt: 'Deploying microscopic infiltration units...' },
      { word: 'interoperability', prompt: 'Forcing cross-system vulnerabilities...' },
      { word: 'multithreading', prompt: 'Executing parallel attack vectors...' },
      { word: 'asynchronous', prompt: 'Manipulating time-sensitive operations...' },
      { word: 'electromagnetic', prompt: 'Disrupting security field generators...' },
      { word: 'teleportation', prompt: 'Bypassing physical security barriers...' },
      { word: 'holographic', prompt: 'Creating decoy projection systems...' },
      { word: 'metamaterials', prompt: 'Adapting to countermeasure responses...' }
    ]
  };
  // Get a random word from the pool based on level
  export const getRandomWord = (level) => {
    const pool = wordPools[level] || wordPools[1];
    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    return randomItem;
  };