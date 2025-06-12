import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Chip,
  Card,
  CardContent,
  CardActions,
  Grid,
  IconButton,
  Divider
} from '@mui/material';

// Import icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LinkIcon from '@mui/icons-material/Link';
import DownloadIcon from '@mui/icons-material/Download';

// Course Materials Tab Content (Merged Content and Resources)
const CourseMaterialsTab = ({ courseData, theme, getFileIcon, formatDate, isUpcoming, isPastDue, getDaysRemaining }) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 600 }}>
        Course Materials
      </Typography>
      
      {/* Lecture Materials Section */}
      <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
        All Lecture Materials
      </Typography>
      
      {courseData.modules.map((module) => (
        <Card key={module.id} sx={{ mb: 3 }} elevation={2}>
          <Box sx={{ 
            bgcolor: theme.palette.primary.light, 
            color: 'white', 
            px: 2, 
            py: 1.5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {module.title} - Week {module.weeks}
            </Typography>
          </Box>
          <List disablePadding>
            {module.content
              .filter(item => item.type === 'lecture' && item.files)
              .flatMap(lecture => [
                <ListItem 
                  key={`lecture-${lecture.id}`}
                  sx={{ 
                    bgcolor: theme.palette.background.light,
                    py: 1
                  }}
                >
                  <ListItemIcon>
                    <VideoLibraryIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        {lecture.title}
                      </Typography>
                    }
                    secondary={lecture.description}
                  />
                </ListItem>,
                ...lecture.files.map((file, index) => (
                  <ListItem 
                    key={`${lecture.id}-${index}`} 
                    divider={index < lecture.files.length - 1}
                    sx={{ pl: 6 }}
                    secondaryAction={
                      <IconButton edge="end" aria-label="download">
                        <DownloadIcon />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      {getFileIcon(file.name)}
                    </ListItemIcon>
                    <ListItemText
                      primary={file.name}
                      secondary={`${file.size} • Uploaded on ${formatDate(file.uploadDate)}`}
                    />
                  </ListItem>
                ))
              ])
            }
            {module.content.filter(item => item.type === 'lecture' && item.files).length === 0 && (
              <ListItem>
                <ListItemText
                  primary="No lecture materials available for this week"
                  sx={{ color: theme.palette.text.secondary, fontStyle: 'italic' }}
                />
              </ListItem>
            )}
          </List>
        </Card>
      ))}
      
      {/* Resources Section */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2, color: theme.palette.primary.main, fontWeight: 600 }}>
        Additional Resources
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {courseData.resources.map((resource) => (
          <Grid item xs={12} md={4} key={resource.id}>
            <Card sx={{ height: '100%' }} elevation={2}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  {resource.link ? <LinkIcon color="primary" /> : <MenuBookIcon color="primary" />}
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {resource.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {resource.description}
                </Typography>
              </CardContent>
              {resource.link && (
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkIcon />}
                  >
                    Access Resource
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseMaterialsTab;
