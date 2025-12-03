import AutismTherapy from './AutismTherapy'
import SpeechTherapy from './SpeechTherapy'
import OccupationalTherapy from './OccupationalTherapy'
import BehaviorTherapy from './BehaviorTherapy'
import SpecialEducation from './SpecialEducation'
import PlayTherapy from './PlayTherapy'
import MusicTherapy from './MusicTherapy'
import ABATherapy from './ABATherapy'
import EarlyIntervention from './EarlyIntervention'
import SensoryIntegration from './SensoryIntegration'
import Physiotherapy from './Physiotherapy'

export {
  AutismTherapy,
  SpeechTherapy,
  OccupationalTherapy,
  BehaviorTherapy,
  SpecialEducation,
  PlayTherapy,
  MusicTherapy,
  ABATherapy,
  EarlyIntervention,
  SensoryIntegration,
  Physiotherapy,
}

// Export as a service data object for easy use in ServiceDetail.jsx
const serviceData = {
  'autism-therapy': AutismTherapy,
  'speech-therapy': SpeechTherapy,
  'occupational-therapy': OccupationalTherapy,
  'behavior-therapy': BehaviorTherapy,
  'special-education': SpecialEducation,
  'play-therapy': PlayTherapy,
  'music-therapy': MusicTherapy,
  'aba-therapy': ABATherapy,
  'early-intervention': EarlyIntervention,
  'sensory-integration': SensoryIntegration,
  'physiotherapy': Physiotherapy,
}

export default serviceData

